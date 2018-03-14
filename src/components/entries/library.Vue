<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
   
   <div class="project-content">
						<div>
                            
                            <img style="display: block; text-align: center; width: 100%; height: auto; max-width: 600px; margin: 0 auto;" src="/static/img/lfl.jpg">

                            
                            <h2>What It Is</h2>
						
                            <p>
                              The idea is to provide a platform for “offline digital content”. A wireless signal is broadcast which users can connect to. Upon connection they are redirected to a page in their browser.

At this page users can upload and share information anonymously.

Everything exists locally, disconnected from the world wide web. That is, you have to be within the signal range to access any of the content.  
                            </p>
                            
                            <h2>What I Did</h2>
                            	<p>
								Created a piece of technology that could function as an isolated internet hub, a place where users can share information with one another anonymously.
							</p>
                            
                            <p>Sadly, I don't have a picture of what the final product looks like at the moment. I'm working on getting it. Imagine a raspberry pi connected to a portable Wifi hotspot device, both of which are connected to a portable USB charger. Hack away!</p>
                            
                            <p>Met with the Professor on a weekly basis to evaluate our goals.</p>
                            <h2>Technology</h2>

                            <p>Open WRT Custom Router Firmware - Hosting the website on the router directly!</p>
                            <p>Django - Web backend, Python framework</p>
                            <p>PostgreSQL - Database</p>
                            <p>Apache - Server</p>

                            <h2>Why It Matters</h2>

							<p>
								How do people interact when there are no reprocussions, no risk of being tracked or identified, where they can share anything they want unrestricted? There are many fun questions that can be asked and that can be studied from a  project like this. I pose more scenarios on the project website.  
							</p>
                        
                            
                            <h2>Show Me The Code!</h2>
                            
                            <p>This is just a very short overview of what the project was. Please see the project website for more details:<br><br>
                            - <a href="https://jamesaudretsch.wordpress.com/little-free-library-project-part-0/" target="_blank">https://jamesaudretsch.wordpress.com/little-free-library-project-part-0/</a>
                            </p>
                   
							


						</div>
					</div>
   
    </entry>
</template>

<script>
var DATA = {
      name: 'Little Free Library',
        title: 'Little Free Library',
        subtitle: 'Research in Decentralized Social Networks',
        date: 'January - May 2016',
        image: '/static/img/iu.jpg',
        description: 'An isolated internet hub, a place where users can share information with one another anonymously.'
}

export default {
  ...DATA,

  data() {
      return DATA;
      }
  }
</script>
