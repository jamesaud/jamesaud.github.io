<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
  <div class="project-content">
						<div>         
                            <h2>What It Was</h2>
							<p>
                                An 8 week internship at Cerner, a medical software company providing solutions to private practices and hospitals alike. 
							</p>
                            <h2>What I Did</h2>
							<p>
                                
								I Integrated a docker CI/CD solution into Jenkins deployments on DC/OS and Marathon, developing a python package to abstract and automate docker operations including building and testing, registry pushes, and marathon deployments.
                                
							</p>
                            <p>Well that was a lot. I used Docker to automate our CI/CD process for a few dozen Ruby on Rail's developers. Our "Population Health" project needed to be converted to be compatible with Docker - I worked on a small team to integrate this project with Docker and Apache Mesos (a container orchestration platform).</p>
                            
                            <p>Basically, I converted our web app to follow these principals: <a href="https://12factor.net/">https://12factor.net/</a></p>

                            <h2>Why It Matters</h2>

                            
							<p>
								Dozens of Rails developers were able to save time working locally with a Docker set up. By setting up automating testing with Jenkins &amp; Docker, I managed to streamline the CI process with our internal Docker Registry. The package I wrote helped write more maintainable and testable CI code. 
							</p>
                            
                            <p>When I left, my team was in the process of setting up our CD process with Docker &amp; DC/OS Apache Mesos. I helped kickstart our initial setup and managed to push our builds successfully to DC/OS Mesos.</p>
                            
                            <h2>Technology</h2>
                            <p>Docker - Dev &amp; Production containerization</p>
                            <p>Ruby on Rails - Web Framework for our web app </p>
                            <p>Python - Language I used to write a Docker engine wrapper</p>
                            <p>Jenkins - Automating continuous integration and continuous deployment</p>
                            <p>DC/OS, Marathon, &amp; Apache Mesos - Container orchestration platform</p>

                            
                            <h2>Show Me The Code!</h2>

                            
							<p>
								I can't show some of the code as it now belongs to Cerner. The Marathon configurations, Ruby on Rails code, and  Jenkin scripts aren't accessible.
							</p>
                            
                            <p>What I can show is a Python package I wrote for automating docker testing &amp; registry pushes:
                                <br>
                            </p>
                            
                            <p>
                                Python Wrapper for Docker:<br>
                            - <a href="https://github.com/jamesaud/pypeline" target="_blank">https://github.com/jamesaud/pypeline</a>
                            </p>
                            <p>
                                Integration with Jenkins<br>
                            - <a href="https://github.com/jamesaud/dockerized-jenkins-pypeline">https://github.com/jamesaud/dockerized-jenkins-pypeline</a><br>

</p>                            

						</div>
					</div>
        </entry>
</template>

<script>
var DATA = {
  name: 'Cerner',
  title: 'Cerner Software Engineer',
  subtitle: 'Internship - Increasing Scalability with Docker',
  date: 'June - August 2016',
  image: '/static/img/docker.png',
  description: 'Container Orchestration, Continuous Integration and Continuous Deployment with Docker'
}

export default {
  ...DATA,
  data(){
      return DATA
  }
  }
</script>