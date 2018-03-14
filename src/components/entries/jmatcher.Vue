<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
        <div class="project-content">
						<div>
							
                            <h2>What It Is</h2>
							<p>
                                For my "Software Engineering 1" class, we had a single project that was 10 weeks long. We worked in teams of 4. 
							</p>
                            <p>We were assigned "Customers", Graduate Students that represented real life business customers. We came to them with software ideas, and they came up with a set of requirements for a software solution that we had to implement. These projects ranged from a cooking video website, to a fantasy soccer website, to  a social media website.</p>
                                   
                            <p>Our team developed a platform called "JMatcher", a Tinder-like job matching site. The idea is to match you to a job based the best fit. This was a 5 2-week sprint project where we had to implement many different features. </p>
                            <h2>What I Did</h2>
							<p>
				                My team, (and most of the class), constituted of Masters students. However, I ended up leading our team in the archetecture design and development of our sofware solution.
							</p>
                     
                            <p> Our framework of choice was Django (Python based web framework), mostly due to my prior experience at developing web apps. My rational was that it is "batteries included", and is excellent for rapid development and prototyping. 
                            </p>
                        
                            <p>I taught 3 other people Django in mini classes that I designed. I also led team meetings in all 5 sprints, and assigned development tasks at each sprint.</p>
                            
                            <p>Specific features I developed are Employer &amp; Student User Accounts, Social Auth, Updating Profiles, Inbox, Live Chat, Heroku Deployments, and I also helped the out on Social Feed and Searching Jobs.</p>
                                                        
                            <h2>Technology</h2>

                            <h4>Backend Web Stack:</h4>
                            <p>Django - Python Web Framework</p>
                            <p>PostgreSQL - Database</p>
                            <p>Docker - Container for CI &amp; Development</p>

                            <h4>Frontend Web Stack:</h4>
                            <p>Html + Bootstrap - Front End HTML Framework</p>
                            <p>SCSS - Better CSS</p>
                            <p>JQuery - Better JS</p>
                            
                            <h4>Deployment &amp; Monitoring:</h4>
                            <p>Heroku - Easy deployments</p>

                            <h4>Integrations:</h4>
                            <p>Mailgun - 3rd party email provider</p>
                            <p>Oauth - Facebook/Google</p>
                            
                            <p></p>
                            
                            

                            <h2>Why It Matters</h2>

							<p>
                            For the most part, this was agile software development where we met the customers every 2 weeks to evaluate progress and had daily scrums. In addition to the software requirements there were testing, documentation, and other project requirements. It was my first experience leading a team in software development.</p>
                            <p>We ended up being the top project in  the entire class. More impressively (and what I'm more proud of) is that we did this while spending (probably) the least amount of development time. We  probably spent 7-10 hours / week each on development &amp; project planning, but were extremely efficient!</p>
                                                    
                            
                            <h2>Show Me The Code!</h2>
                            <p>
                            Project Github:<br>
                            - <a href="https://github.com/jamesaud/se1-group4" target="_blank">https://github.com/jamesaud/se1-group4</a>
                            </p>
                            <p>
                      Main Website<br>
                            - <a href="http://match.jmatcher.com" target="_blank">match.jmatcher.com
                                </a> or try <a href="http://jmatcher.herokuapp.com/" target="_blank">http://jmatcher.herokuapp.com</a> if domain is down (though you  won't be able to register an account if the domain is down).</p>
                            <p>Even if the main domain is down, you can log in with test accounts: <br><br>For a student  account, use:
                            <br>
                            Username: testuser<br>
                            Password: secret123
                            <br><br>For an employer account, use:
                                <br>
                                Username: testemployer<br>
                                Password: secret123
                                
                        </p>
                     
                            <p><a href="https://vimeo.com/217105562">Video showcase, see &amp; listen to me talk about our software (~ 5 min) https://vimeo.com/217105562</a></p>
						</div>
					</div>
        
    </entry>
</template>

<script>
var DATA = {
      name: 'JMatcher',
        title: 'Job Social Network Project',
        subtitle: 'Leading a team in an agile environment',
        date: 'January - May 2017',
        image: '/static/img/jm1.png',
        description: 'Leading a team of Masters students in a software engineering competition, focused on lean development practices.'
}

export default {
  ...DATA,

  data() {
      return DATA;
      }
  }
</script>
