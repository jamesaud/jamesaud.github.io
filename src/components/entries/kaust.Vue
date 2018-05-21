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
                               Using big data from the global earthquake network, I'm working on discriminating earthquake signals from noise. 

                            </p>

                            <p>Experimenting with Convolutional Neural Nets, RNN, and other techniques. 
                                My idea is to use spectral images of earthquakes (spectrograms over a time window), and have  neural networks learn key features of earthquakes spectral and time information.</p>
                                        
							<p>
                                								
Conducting research into convoluted neural nets for earthquake detection, resulting in industry leading 99.9% accuracy.
</p>

<p>
Built software toolbox in Python for distributed and parallel batch data analysis, processing 2 million+ waveforms and 150+ GB of data.
</p>

<p>
Interacting with global seismic databases via REST APIs and designing reusable object oriented Python libraries.
</p>
<p>
Utilizing a data science tech stack including Jupyter Notebook, Python 3.6, NumPy, SciPy, PyTorch and Docker.
							</p>
            

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

                            
                            <p>Github 1: <a href="https://github.com/jamesaud/seismic-analysis-toolbox"  target="_blank">https://github.com/jamesaud/seismic-analysis-toolbox</a>
							 
                            </p>
                            <p>Github 2: <a href="https://github.com/jamesaud/earthquake-detector-9000"  target="_blank">https://github.com/jamesaud/earthquake-detector-9000</a>
							 
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