<template>
    <div id="home">
      <v-container fluid pa-0>
        <v-flex md12>
            <v-parallax src='/static/vbanner.jpg'>
              <v-layout column align-center justify-center>
                <div class="pb-2">
                  <v-avatar
                  size="100px"
                  slot="activator"
                  >
                  <img
                    src="/static/img/james.png"
                    alt=""
                  >
                  </v-avatar>
                </div>
                <h1 class='white--text display-3 mb-1'>James Audretsch</h1>
                
                <h4 class='white--text headline'>Software Developer. Entrepreneur.</h4>
                
                <div class='mt-3 social-links'>

                  <span v-for='link in social_links' 
                     :key='link.title'>

                      <span class='px-2'>
                        <a :href='link.url' target='_blank' slot='activator'>
                          <v-btn icon class='white--text'>
                            <v-icon color='white'>{{link.icon}}</v-icon>
                          </v-btn>
                        </a>
                      </span>
                  </span>

                </div>

                
              </v-layout>
         
            </v-parallax>
        </v-flex>
      </v-container>

      <v-container class='main'>
       <v-layout row wrap>
          <v-flex md2 xs-12>
            <div v-for='category in interests' :key='category.title' class='mb-5'>
              <h2 class='title mb-2 mt-3 pl-1'>{{category.title}}</h2>
          
              <span v-for='value in category.values' 
                :key='value.text'>
                <v-chip label outline color='black'>{{ value.text }}</v-chip>
              </span>
            </div>
          </v-flex>

          <v-flex xs12 md6 offset-md1>
            <div class="post" v-for='post in posts' :key='post.title'>
                <v-card class='my-3' hover>
                      <v-card-media
                        class='white--text post-img'
                        height='170px'
                        :src='post.imgUrl'
                      >
                        <v-container fill-height fluid>
                          <v-layout>
                            <v-flex xs12 align-end d-flex>
                              <span class='headline'>{{ post.title }}</span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-text>
                        {{ post.content }}
                      </v-card-text>
                      <v-card-actions>
                        <div class="grey--text pl-2">{{post.date}}</div>
                        <v-btn flat small :color='post.category.color'>{{post.category.name}}</v-btn>
                        <v-spacer></v-spacer>

                        <router-link :to="{name: post.urlName}" class='learn-more-link'>
                          <v-btn flat class='blue--text'>Learn More</v-btn>
                        </router-link>

                      </v-card-actions>
                </v-card>
            </div>
          </v-flex>

          <v-flex offset-md1 md2 xs-12>
            <div class='mb-5'>
              <h2 class='title text-md-right mb-3 mt-3 pr-1'>Articles | Posts</h2>
               
               <v-card  
               v-for="article in articles" 
               :key="article.name"
               :value='article.name'
               class='mb-3'
               >
                <v-card-title primary-title>
                  <div class="caption grey--text article-date">{{article.date}}</div>
                  <div>
                    <div class="subheading">{{article.title}}</div>
                    <span class="grey--text">{{article.subtitle}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <a :href='article.url' target='_blank'><v-btn flat small >Read</v-btn></a>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>

       </v-layout>

      </v-container>
      
      <v-container fluid pa-0>
        <v-flex md12>
          <v-bottom-nav fixed :value='true' :active.sync='navDefaultState' color='black'>
            
            <v-btn 
              v-for="category in categories" :key="category.name"
              :value='category.name'
              @click='filterPosts(category)' 
              flat :color='category.color' 
              >
              <span>{{category.name}}</span>
              <v-icon>{{category.icon}}</v-icon>
            </v-btn>
            
          </v-bottom-nav>
        </v-flex>
      </v-container>
    </div>
</template>

<script>
import Entries from '@/components/entries/entries'
 
var CATEGORIES = {
            Chronological: {
              name: "Chronological",
              icon: "history",
              color: "white",
            },
            Professional: {
              name: "Professional",
              icon: "business",
              color: "red",
            },
            Project: {
              name: "Project",
              icon: "web_asset",
              color: "green"
            },
            Entrepeneurship: {
              name: "Entrepeneurship",
              icon: "lightbulb_outline",
              color: "orange"
            }
        };

var POSTS = [
          {
            category: CATEGORIES.Project,
            title: Entries.iot.title,
            date: Entries.iot.date,
            content: Entries.iot.description,
            imgUrl: Entries.iot.image,
            urlName: 'Iot'
          },
          {
            category: CATEGORIES.Professional,
            title: Entries.kaust.title,
            date: Entries.kaust.date,
            content: Entries.kaust.description,
            imgUrl: Entries.kaust.image,
            urlName: 'Kaust'
          },
          {
            category: CATEGORIES.Entrepeneurship,
            title: Entries.reuserat.title,
            date: Entries.reuserat.date,
            content: Entries.reuserat.description,
            imgUrl: Entries.reuserat.image,
            urlName: 'ReuseRat'
          },
           {
            category: CATEGORIES.Project,
            title: Entries.jmatcher.title,
            date: Entries.jmatcher.date,
            content: Entries.jmatcher.description,
            imgUrl: Entries.jmatcher.image,
            urlName: 'Jmatcher'
          },
          {
            category: CATEGORIES.Professional,
            title: Entries.synergy.title,
            date: Entries.synergy.date,
            content: Entries.synergy.description,
            imgUrl: Entries.synergy.image,
            urlName: 'Synergy'
          },
          {
            category: CATEGORIES.Professional,
            title: Entries.cerner.title,
            date: Entries.cerner.date,
            content: Entries.cerner.description,
            imgUrl: Entries.cerner.image,
            urlName: 'Cerner'
          },

          {
            category: CATEGORIES.Project,
            title: Entries.library.title,
            date: Entries.library.date,
            content: Entries.library.description,
            imgUrl: Entries.library.image,
            urlName: 'Library'
          },
          {
            category: CATEGORIES.Entrepeneurship,
            title: Entries.crimsoncrepes.title,
            date: Entries.crimsoncrepes.date,
            content: Entries.crimsoncrepes.description,
            imgUrl: Entries.crimsoncrepes.image,
            urlName: 'Crimsoncrepes'
          },

          {
            category: CATEGORIES.Project,
            title: Entries.schoolprojects.title,
            date: Entries.schoolprojects.date,
            content: Entries.schoolprojects.description,
            imgUrl: Entries.schoolprojects.image,
            urlName: 'Schoolprojects'
          }
        ];

export default {
  name: 'Home',

  methods: {
    filterPosts(category) {
      if (category === CATEGORIES.Chronological){
        this.posts = POSTS;
      }
      else{
        this.posts = POSTS.filter(post => post.category === category);
      }
    }
  },

  data () {
      return {
        navDefaultState: 'Chronological',
        title: 'Your Logo',
        categories: CATEGORIES,

        social_links: [
          {
            title: 'LinkedIn',
            icon: 'fa-linkedin',
            url: 'https://linkedin.com/in/james-audretsch' 
          },
          {
            title: 'Github',
            icon: 'fa-github',
            url: 'https://github.com/jamesaud' 
          },
          {
            title: 'Medium',
            icon: 'fa-medium',
            url: 'https://medium.com/@audretschjames' 
          }
        ],

        articles: [
          
          {
            date: '2/25/18',
            title: 'Understanding Docker if it were a Game Boy',
            subtitle: 'The Ultimate Docker Tutorial',
            url: 'https://medium.com/@audretschjames/understanding-docker-as-if-it-were-a-gameboy-96c96392efbf'
          },
          {
            date: '2/3/18',
            title: 'Docker with VENoM',
            subtitle: 'Local development stack tutorial',
            url: 'https://medium.com/@audretschjames/understanding-docker-as-if-it-were-a-gameboy-96c96392efbf'
          }
        ],

        interests: [
          {title: 'Coding Interests',
           values: [
              {text: 'Python'},
              {text: 'Docker'},
              {text: 'Container Orchestration'},
              {text: 'Machine Learning'},
              {text: 'Software Design'},
              {text: 'UX Design'},
              {text: 'Backend'},
              {text: 'Vue.js'},
              {text: 'React.js'},
              {text: 'TypeScript'},
              {text: 'Django'},
              {text: 'IoT'},
              {text: 'Kanban'}
              ],
          },
          {title: 'Hobbies',
           values: [
              {text: 'Ultimate Frisbee'},
              {text: 'Coding :)'},
              {text: 'Jazz Piano'},
              {text: 'Music Production'},
              {text: 'Entrepeneurship'},
              {text: 'Hackathons'},
              {text: 'Boxing'},
              {text: 'Hiking'},
              {text: 'Traveling'},
              {text: 'Dogs (Huskies Especially)'},
              {text: 'History Podcasts'}
              ],
          }
          ],
        posts: POSTS,
        
      }
  }
}
</script>

<style scoped lang="scss">

  .social-links a{
    text-decoration: none;
  }

  .post{
    .post-img{
      background-color: dodgerblue ;
    }
  }

  .main{
    padding-bottom: 4em;
  }
  
  .article-date{
    width: 100%;
  }

</style>

<style>
#app{
    background-color: default;
}

.btn__content::before{
  text-decoration-color: transparent !important;
}

a{
    text-decoration-color: transparent;
}


</style>