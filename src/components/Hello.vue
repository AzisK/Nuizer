<template>
  <transition name="fade">
    <div class="home" v-if="!secondplayer">
      <div class="inner">
        <h1>Do you know your Hamilton Lyrics?</h1>
        <p>
          Test your knowledge of Hamilton: An American Musical by guessing who
          sang what lyric.
        </p>
        <p>Invite a second player by sending them this link {{ url }}.</p>
      </div>
    </div>
    <div class="play" v-if="secondplayer">
      <div>
        <div class="container hamilton--header--text">
          <h1>Do you know your Hamilton Lyrics?</h1>

          <div class="columns hamilton--inner">
            <div class="column is-half left">
              <p class="title">User 1</p>
              <p class="subtitle">Total Score: {{ playerdata.one.score }}</p>
            </div>
            <div v-if="secondplayer" class="column is-half right">
              <p class="title">User 2</p>
              <p class="subtitle">Total Score: {{ playerdata.two.score }}</p>
            </div>
          </div>

          <div class="hamilton--lyrics--text">
            <p>{{ question.form }}</p>
            <div class="hamilton--answers">
              <input v-model="answer" placeholder="Answer">
              <button v-on:click="checkAnswer()">Answer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ChannelDetails from '@/components/ChannelDetails';

const questions = [
  {
    form:
      'Who was the first US president?',
    answer: 'Washington',
  },
  {
    form:
      'Who was the first Lithuanian president?',
    answer: 'Smetona',
  },
  {
    form:
      'Who was the first Lithuanian woman president?',
    answer: 'Grybauskaitė',
  },
];

export default {
  name: 'home',
  data() {
    return {
      presenceid: null,
      hasAnswered: false,
      question: null,
      fullAnswer: null,
      answer: null,
      count: null,
      players: 1,
      secondplayer: false,
      playerdata: {
        one: {
          id: null,
          score: 0,
          userid: null,
        },
        two: {
          id: null,
          score: 0,
          userid: null,
        },
      },

      userid: null,
      url: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.presenceid = this.getUniqueId();
      if (!this.checkPresenceID()) {
        const separator = window.location.href.indexOf('?') === -1 ? '?' : '&';
        window.location.href =
        window.location.href + separator + this.presenceid;
      }
      this.url = window.location.href;
      this.getNewQuestion();
      const channel = ChannelDetails.subscribeToPusher();

      channel.bind('pusher:member_added', () => {
        this.players += 1;
        this.secondplayer = true;
      });

      channel.bind('pusher:subscription_succeeded', (members) => {
        if (members.count === 1 && !this.playerdata.one.id) {
          this.playerdata.one.id = members.myID;
          this.playerdata.one.userid = 1;
          this.userid = 1;
        } else if (members.count === 2) {
          this.secondplayer = true;
          this.playerdata.two.id = members.myID;
          this.playerdata.two.userid = 2;
          this.userid = 2;
        }
      });

      channel.bind('pusher:member_removed', (member) => {
        this.players -= 1;
        if (member.count === 1) {
          this.secondplayer = false;
        }
      });

      channel.bind('client-send', (data) => {
        if (this.userid === 1) {
          this.playerdata.two.score = data.data.two.score;
        } else if (this.userid === 2) {
          this.playerdata.one.score = data.data.one.score;
        }
      });
    },
    getUniqueId() {
      return (
        `id=${Math.random().toString(36).substr(2, 8)}`
      );
    },
    checkPresenceID() {
      const getQueryString = (field, url) => {
        const href = url || window.location.href;
        const reg = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
        const string = reg.exec(href);
        return string ? string[1] : null;
      };
      const id = getQueryString('id');
      return id;
    },
    checkAnswer() {
      const channel = ChannelDetails.subscribeToPusher();
      this.hasAnswered = true;
      this.correct = this.isCorrect();

      if (this.correct) {
        if (this.userid === 1) {
          this.playerdata.one.score += 10;
        } else if (this.userid === 2) {
          this.playerdata.two.score += 10;
        }
      } else if (!this.correct) {
        if (this.userid === 1) {
          this.playerdata.one.score = Math.max(
            0,
            (this.playerdata.one.score -= 10),
          );
        } else if (this.userid === 2) {
          this.playerdata.two.score = Math.max(
            0,
            (this.playerdata.two.score -= 10),
          );
        }
      }

      this.cleanAnswer();

      channel.trigger('client-send', { data: this.playerdata });
      this.count = 3;
      const countdown = setInterval(() => {
        this.count -= 1;
        if (this.count === 0) {
          clearInterval(countdown);
          this.getNewQuestion();
        }
      }, 1000);
    },
    isCorrect() {
      const answerLength = this.answer.length;
      let matchLength = 0;
      let leftAnswer = this.answer;

      [...this.fullAnswer].forEach(
        (letter1) => {
          for (let index = 0; index < leftAnswer.length; index += 1) {
            const letter2 = leftAnswer.charAt(index);

            const matches = letter1 === letter2;

            if (matches) {
              matchLength += 1;
              leftAnswer = leftAnswer.substring(index + 1, leftAnswer.length);
            } else {
              break;
            }
          }
        },
      );

      if (Math.abs(answerLength - matchLength) < 2) {
        return true;
      }

      return false;
    },
    cleanAnswer() {
      this.answer = '';
    },
    getRandomQuestions(array, number = 1) {
      const length = array.length;
      const randomIndexes = [];
      const randomItems = [];
      let index;
      let item;
      let count = number;

      while (count) {
        index = Math.floor(Math.random() * length);
        if (randomIndexes.indexOf(index) === -1) {
          count -= 1;
          randomIndexes.push(index);
        }
      }

      randomIndexes.forEach((randomIndex) => {
        item = array.slice(randomIndex, randomIndex + 1).pop();
        randomItems.push(item);
      });

      if (randomItems.length === 1) {
        return randomItems.pop();
      }

      return randomItems;
    },
    getNewQuestion() {
      const question = this.getRandomQuestions(questions, 1);
      this.question = question;
      this.fullAnswer = question.answer;
      this.hasAnswered = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
h1 {
  font-size: 3rem;
  font-weight: bold;
}
p {
  font-size: 1.5rem;
  margin: 0 0 20px 0;
}
.play--button {
  background-color: white;
  color: #7fd4d3;
  font-weight: bold;
  border-radius: 20px;
  letter-spacing: 1px;
  padding: 20px;
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(36, 180, 126, 0.4);
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.play--button:hover {
  background-color: white;
  color: #7fd4d3;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
a {
  color: #fff;
}
p {
  color: #fff;
}
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.play--button {
  background-color: white;
  color: #7fd4d3;
  font-weight: bold;
  border-radius: 20px;
  letter-spacing: 1px;
  padding: 20px;
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(36, 180, 126, 0.4);
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 5;
}
.play--button:hover {
  background-color: white;
  color: #7fd4d3;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}
.hamilton--header--text {
  margin-top: 50px;
}
.hamilton--inner {
  margin-top: 20px;
}
.hamilton--inner .left {
  text-align: left;
}
.hamilton--inner .right {
  text-align: right;
}
.title {
  font-weight: bold;
}
.hamilton--lyrics--text {
  width: 600px;
  margin: 0 auto;
}
.hamilton--lyrics--text p {
  font-weight: bold;
}
</style>
