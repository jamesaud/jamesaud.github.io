<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
        <div class="project-content">
						<div>
							
                            <h2>What It Is</h2>
							<p>
                                A 6 month part time contracting job with Synergy+ Value Based Services. Employed to do all the market research, website writing / design / development, and digital marketing all from scratch.   
							</p>
                            <h2>What I Did</h2>
							<p>
								1. Created a Django (Python Framework)  website from scratch, surpassing all requirements set forth by the customer. 2. Providing valuable marketing analysis and a digital marketing plan, and implemented Google Advertising.                             
							</p>
                            <p>
                                
                            </p>
                            <p>What my research showed is that the healthcare technology industry is far too complex and confusing. Our goal was to appear sleek and simple, with clear solutions to definable problems. My website illustrates this point of view.</p>
                            
                            <p>My competitor research led me to formulate a customized Google Ads plan to track competitors, keywords, and conversions. At $10 / click on most health care keywords, the plan revolved around highly specific targeting. The focus was on iterative improvement, focusing on a geographical niche at first. </p>
                            
                            <h2>Technology</h2>

                            <h4>Backend Web Stack:</h4>
                            <p>Django - Backend</p>
                            <p>PostgreSQL - Database</p>
                            <p>Nginx - Load Balancer</p>
                            <p>Docker - Used in Dev &amp; Production on Digital Ocean, including containers for Certbot via Let's Encrypt </p>

                            <h4>Frontend Web Stack:</h4>
                            <p>Html + Bootstrap - Frontend framework </p>
                            <p>SCSS - Better CSS</p>
                            <p>JQuery - Moderately used </p>
                            
                            <h4>Deployment:</h4>
                            <p>Digital Ocean - Deployments using Docker</p>

                            <h4>Integrations:</h4>
                            <p>MailChimp - Adding user's to email lists</p>
                            
                            <h4>Other:</h4>
                            <p>Google Ad Words - Handled advertising for client</p>
                            
                            <p>Mouseflow - Metrics</p>
                            
                            <p>Google Analytics - metrics</p>

                            <p>SpyFu - Competitor SEO / PPC research </p>


                            <h2>Why It Matters</h2>

							<p>
								This was professional work with a real customer. The company was very satisfied with the solution, and the software solution is continuously helping land more clients.
							</p>
                        
                            
                            <h2>Show Me The Code!</h2>

                            
                            <p>
                            Project Github:<br>
                            - <a href="https://github.com/jamesaud/MedicalWebsite" target="_blank">https://github.com/jamesaud/MedicalWebsite</a>
                            </p>
                            <p>
                      Main Website<br>
                            - <a href="http://104.236.125.205/">http://104.236.125.205/
                                </a></p>
                          
						</div>
					</div>
    </entry>
</template>

<script>
var DATA = {
      name: 'Synergy',
            title: 'Web Contracting & Advertising',
            subtitle: 'Development for a startup healthcare company',
            date: 'September 2016 - January 2017',
            image: '/static/img/synergy.jpg',
            description: 'Developing a consumer oriented website for a healthcare company, with Google Ads and SEO consulting.'
}

export default {
  ...DATA,

  data() {
      return DATA;
      }
  }
</script>
