<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
  <div class="project-content">
						<div>         
                            <h2>What It Was</h2>
							<p>
                            Working with Sesmologists for state of the art earthquake detection techniques.
							</p>


                            <h2>What I Did</h2>
							<p>
                                
								Researching using Neural Networks for earthquake detection. 
							</p>
                            <p>
                               Using big data from the global earthquake network, I'm working on discriminating earthquake signals from noise. 
                               Moreover, the network needs to determine whether the signal is a 'local' earthquake (inside the network of sensors)  or 'non-local'. 

                            </p>

                            <p>ConvNets, RNN, and other techniques are being experimented with. 
                                My idea is to use spectral images of earthquakes (spectrograms over a time window), and have  neural networks learn key features of earthquakes spectral and time information.</p>
                                                    

                            <h2>Why It Matters</h2>

                            <p>
                                This is not for Earthquake Hazard Detection, meaning we are not actively monitoring areas to warn people about earthquakes.
                            <p>
							   
                               <p>Gathering this data can help tell us more about the underlying structure of the earth in our target research area (Tanzania). 
                                   However, my neural net detection technique can be expanded to other areas in the world, making it an extremely useful generalized earthquake detection tool.</p>
                            
                            <p>
                                Cross-field collaboration makes for very interesting research! 
                                </p>
                            

                            <h2>Technology</h2>

                           <p>
                               Data Science tech stack including Jupyter Notebook, Python 3.6, NumPy, SciPy, and PyTorch.

</p>



                            <h2>Show Me The Code!</h2>

                            
                            <p>Github: <a href="https://github.com/jamesaud/earthquake-recognition"  target="_blank">https://github.com/jamesaud/earthquake-recognition</a>
							 
                            </p>
                        

						</div>
					</div>
        </entry>
</template>

<script>
var DATA = {
  name: 'Kaust',
  title: 'Machine Learning Researcher',
  subtitle: 'Research Internship at KAUST, Saudi Arabia',
  date: 'October 2017 - June 2018',
  image: '/static/img/kaustdark.jpg',
  description: 'Singal processing and machine learning research, using neural networks to find earthquakes in Tanzania.'
}

export default {
  ...DATA,
  data(){
      return DATA
  }
  }
</script>