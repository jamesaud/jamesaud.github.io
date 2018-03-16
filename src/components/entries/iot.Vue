<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
  <div class="project-content">
						<div>         
                            <h2>What It Was</h2>
							<p>
                        A three day Hackathon hosted by KAUST university, focused on making a smart IoT device. 
							</p>
                            <h2>What I Did</h2>
							<p>
                                
								Led a team of three people to create the <strong>Sharkbell</strong>, a smart doorbell for your home! 
                                
							</p>
                        
                        
                            <p>As our main software engineer I focused on the architecture, code design, and deployment of our device. </p>
                            

                            <h2>Why It Matters</h2>

                            <p>We won the KAUST Hackathon People's Choice Award! 
                                The "likes" that you see on the poster in the picture are from people who thought our project was the best!</p>
							<p>
							   Hackathons are a great way to practice working with other people under a time crunch, 
                               create a proof of concept prototype, and do some hardcore coding! 
							</p>
                            
                            <p>IoT has a lot of potentional and is an increasingly growing market year after year. 
                                </p>
                            

                            <h2>Technology</h2>

                           <p> ESP32 Microcontroller was used. I flashed an operating system called Mongoose OS which allows rapid prototyping in javascript.

</p>

<p>MQTT messaging protocol was used to communicate with the WIFI enabled ESP32 Microcontroller.</p>

<p>JS code which allowed us to send messages via Twilio</p>

<p>Microcontroller.js is what I wrote for our doorbell ringing software</p>

<p>The screen display software is custom firmware I write in C </p>

<p>The Android App was a simple app I wrote to listen to doorbell events and notify the person that their doorbell was pushed</p>

<p>Also, I designed and 3d printed the boxes for our equipment in our makerspace lab :)</p>


                            <h2>Show Me The Code!</h2>

                            
							<p>
                                A video of me showcasing the Sharkbell:   <a href="https://photos.app.goo.gl/jUSbBK8dC3gwl4EI3"  target="_blank">https://photos.app.goo.gl/jUSbBK8dC3gwl4EI3</a>
							</p>
                            
                            <p>Github: <a href="https://github.com/jamesaud/hackathon-kaust"  target="_blank">https://github.com/jamesaud/hackathon-kaust</a>
							 
                            </p>
                        

						</div>
					</div>
        </entry>
</template>

<script>
var DATA = {
  name: 'Iot',
  title: 'IoT Hackathon',
  subtitle: 'Creating a Smart Doorbell',
  date: 'January 2018',
  image: '/static/img/iot.jpg',
  description: 'Hacking an IoT microcontroller to create a smart doorbell over three days.'
}

export default {
  ...DATA,
  data(){
      return DATA
  }
  }
</script>