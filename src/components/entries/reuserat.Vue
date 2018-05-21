<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
  <div class="project-content">
						<div>
                            <h2>What It Is</h2>
                            <p>Video Descripion: <a href="https://vimeo.com/206533782">https://vimeo.com/206533782</a></p>
							<p>
                                TLDR: You have stuff to sell. But your life is busy; we get that. We sell your stuff for you - and even provide a pick up service to make things 100% easy. 
							</p>
                            <p>Schedule a pick up on our site, and we will come to your place and pick up your items. In the following weeks, as your items are sold, we take a % of the sale. We use different sales channels to maximize your profit including our own Shopify hosted store. 
                            </p>
                            <p>You also have the option to send items in the mail through  USPS. Monitor your items and profits on our online dashboard.</p>
                            <h2>What I Did</h2>
							<p>
								1. Created a Shopify store to maintain and sell our inventory. 
							</p>
                            
                            <p> 2. Led a team to develop a Django-based "seller" platform to integrate with Shopify. 
                            </p>
                        
                            <p>3. Co-Won the Venture Fellowship award, a $10,000 entrepreneurship award through the Informatics department at Indiana University. The award includes mentorship for 3 months in the Summer by a local Angel Investor, Business Professor, and another representative.</p>
                            
                            <p>We have a synchronized seller platform with the Shopify hosted buyer platform, utilizing Webhooks and the Shopify API. Payment integration so that sellers can cash out via Bank, Check, and Paypal.</p>
                            <p>We are trying to push our online store as we make initial sales through other channels.</p>
                                                        
                            <h2>Technology</h2>

                            <h4>Backend Web Stack:</h4>
                            <p>Django - Python framework</p>
                            <p>PostgreSQL - Database</p>
                            <p>Docker - Containers used in dev and CI/CD with TravisCI</p>

                            <h4>Frontend Web Stack:</h4>
                            <p>Html + Bootstrap - Frontend Framework </p>
                            <p>SCSS - Better CSS</p>
                            <p>JQuery - Lightly used</p>
                            
                            <h4>Deployment &amp; Monitoring:</h4>
                            <p>Heroku - Easy SSL and deployments</p>
                            <p>Opbeat - Performance monitoring</p>
                            <p>Sentry - Error monitoring</p>
                            <p>TravisCI - Continous integration &amp; testing</p>


                            <h4>Integrations:</h4>
                            <p>Mailgun - Email handler</p>
                            <p>Stripe - Using Stripe Connect platform for handling monetary transactions for sellers, synced to our Shopify store</p>
                            <p>Paypal - Payouts via paypal for sellers</p>
                            <p>Youcanbook.me - Scheduling pick ups</p>
                            <p>Oauth - Facebook/Google sign in options</p>
                            <p>Lob - Automated checks for sellers to cash out</p>
                            
                            <p></p>
                            
                            
                            <h4>Other:</h4>
                            <p>Google Ad Words - Targeted Ads</p>
                            <p>Facebook Ads - Targeted Ads </p>
                            <p>Mouseflow.com - Metrics</p>
                            <p>Google Analytics - Metrics</p>


                            <h2>Why It Matters</h2>

							<p>
								Our primary mission statement is to provide a platform that can help conserve our planet and save our environment by preventing waste. 
							</p>
                            
                            <p>Starting a business from scratch is quite a learning experience.</p>
                                                    
                            
                            <h2>Show Me The Code!</h2>
                            <p>
                            Project Github:<br>
                            - <a href="https://github.com/jamesaud/ReuseRat" target='_blank'>https://github.com/jamesaud/ReuseRat
                                </a>
                            </p>
                            <p>
                      Seller Website<br>
                            - <a href="https://sell.reuserat.com" target='_blank'>https://sell.reuserat.com
                                </a></p>
							
				</div>
        </div>
        </entry>
</template>

<script>
var DATA = {
  name: 'ReuseRat',
  title: 'Founder of ReuseRat',
  subtitle: 'Starting a Business From the Ground Up',
  date: 'February - August 2017',
  image: '/static/img/reuserat.jpg',
  description: 'I won a $10,000 entrepneurship grant through Indiana University to start my own business.'
}

export default {
  ...DATA,
  data(){
      return DATA
  }
  }
</script>
