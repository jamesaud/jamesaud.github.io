<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
        <div class="project-content">
						<div>
                            <img style="display: block; text-align: center; width: 100%; height: auto; max-width: 600px; margin: 0 auto;" src="/static/img/crimsoncrepes.jpg">
                            
							<h2>What It Is</h2>
							<p>
                                A crepe food stand + crepe catering business! Serving late night outside of bars, as well as catering to private and public events such as Bloomington's Canopy of Lights! 
							</p>
                        
                            <h2>What I Did</h2>
							<p>
				                With my partner, successfully catered more than a dozen events for various businesses and opened food stand during late night hours outside bars (we can make some mean crepes).
							</p>
                            
                             <p>Planned and established Crimson Crepes, a specialty food cart and catering business, utilizing crowd-funding on Kickstarter.com to raise $1,600.</p>

                     
                            <p> Oversaw logistics regarding finance and budget restrictions and management, professional networking, acquiring licenses, filing taxes, media and advertising, management of part time employees, maintaining a versatile and adaptable business strategy while reacting to unforeseen problems (such as a lawsuit from a large corporation, which was peacefully resolved) and other startup business aspects.
                            </p>
          
                                                        
                            
                            

                            <h2>Why It Matters</h2>

							<p>
                            Starting a business from scratch is quite a learning opportunity. I had to learn how to work with many people to get different permits, partner with businesses to get more sales, and learn how to cook crepes. Nutella + Banana + Powdered Sugar is my favorite!</p>
                            <p>Managing expenses, inventory, etc. that a small business has to deal with is useful for learning how to plan carefully. We also used power tools to make custom modifications to the food cart to make it fire safe and food safe (installing plexi class, air dispersion under the canopy, make-shift sink).</p>
                            
                            <p>We had a free food opening day that had over 150 people, and it was awesome! </p>
                                                    
                                                       <h2>Where can I get some crepes?</h2>
 <p>Sorry, we're now closed :( But, you can reach out to me and I might consider making you one! We still have the $800 crepe maker.</p>
                            
                            <h2>Show Me The Code!</h2>
              <p>No code, but here's the Kickstarter project that got us up and running! Many thanks to all of our donors: <a href="https://www.kickstarter.com/projects/1534986239/bloomington-crepe-project-0">https://www.kickstarter.com/projects/1534986239/bloomington-crepe-project-0</a></p>
						
                            <h2>Images</h2>
                            <p>I was quite young at the time.</p>
                            <img style="width: 100%; height: auto; max-width: 400px;" src="/static/img/crepe1.jpg">
                            <img style="width: 100%; height: auto; max-width: 250px;" src="/static/img/crepe2.jpg">
							
						</div>
					</div>
    </entry>
</template>

<script>
var DATA = {
      name: 'Crimson Crepes',
            title: 'Crowdfunded Food Business',
            subtitle: 'Catering company and food stand',
            date: 'August 2013 - June 2014',
            description: 'A crepe food stand + crepe catering business! Serving late night outside of bars, as well as catering to private and public events.'
}

export default {
  ...DATA,

  data() {
      return DATA;
      }
  }
</script>
