<template>
    <entry :title="title" :subtitle="subtitle" :date="date" :image="image" description="description">
    <div class="project-content">
						<div>
                            
                            <h2>Machine Learning</h2>
							<p>Author Profiling: <a href="https://github.com/jamesaud/author-profiling-machine-learning">https://github.com/jamesaud/author-profiling-machine-learning</a>
							</p>
                            <p>From a tweet, predict the gender of the person who wrote it! Used 200k twitter data records, and managed to achieve 60-70% accuracy depending on the model being used. SVC with Linear Kernel, Naive Bayes, K-Nearest Neighbor compared.</p>
                            <p>Used twitter API &amp; MongoDB to collect the records. Did learning data/test data split, and used cross validation to find the best parameters. TF_IDF used to weight vocabulary scores. Python Numpy, ScikitLearn packages used (though in the class we had to implement these among others, including a simple neural network!)</p>

							 <h2>Search</h2>
							<p>TFIDF and Page Rank Search Engine, with Web Scraping Incorporated  - 
                                <br>
                                Github: <a href="https://github.com/jamesaud/search-engine">https://github.com/jamesaud/search-engine</a>
                                <br>Live Url (only ~4000 total documents to search): <a href="http://cgi.soic.indiana.edu/~jamaudre/search/search/spud.html">http://cgi.soic.indiana.edu/~jamaudre/search/search/spud.html</a>
							</p>
                            
                            <h2>Graphics</h2> 
							<p>OpenGL Android "Falling Blocks" Game (Java) -  <a href="https://github.com/jamesaud/falling-blocks-android">https://github.com/jamesaud/falling-blocks-android</a>
							</p>
                            
                            <p>Unity 3D VR Game for Google Cardboard (C#) -  <a href="https://github.com/jamesaud/vr-game">https://github.com/jamesaud/vr-game</a>
							</p>
                            
                            <h2>Fundamentals </h2>
							<p>Implementations of Common Data Structures (Java) -  <a href="https://github.com/jamesaud/java-data-structure-implementations">https://github.com/jamesaud/java-data-structure-implementations</a>
							</p>
                            
                            <p>Algorithms: Various questions &amp; challenges -  <a href="https://github.com/jamesaud/Algorithems"> https://github.com/jamesaud/Algorithems</a>
							</p>
                            
                            <p>Scheme Interpreters and Functions -  <a href="https://github.com/jamesaud/schemeing"> https://github.com/jamesaud/schemeing</a>
							</p>
						
						</div>
					</div>
    
     </entry>
</template>

<script>
var DATA = {
      name: 'School Projects',
        title: 'School Projects',
        subtitle: 'Variety of Academic Projects',
        image: '/static/img/iunice.jpg',
        date: '2013 - 2017',
        description: 'Coding, coding, and coding!'
}

export default {
  ...DATA,

  data() {
      return DATA;
      }
  }
</script>
