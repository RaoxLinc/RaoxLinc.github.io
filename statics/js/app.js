// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 


    // Create a variable that filters the samples for the object with the desired sample number.
    
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var buildingArray = metadata.filter(sampleObj => sampleObj.id == sample);

    // Create a variable that holds the first sample in the array.
    var result = buildingArray[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var metadata = data.metadata;
    console.log(metadata);

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    // 3. Create a variable that holds the washing frequency.
   var wfreq = result.wfreq
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("plotArea", trace, layout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [[{domain: {x: [0, 1], y: [0, 1]}, value: data.WFREQ,
    title: {text: "Belly Button Washing Frequency Scrubs Per Week", font: {size: 14}},
    type: "indicator", mode: "gauge+number+delta",
    delta: {reference: 9, increasing: {color: "green"}},
    gauge:
      {axis: {range: [0, 10]}, steps: [{range: [0, 5], color: "lightgray"},
      {range: [5, 8], color: "gray"}], threshold: {line: {color: "red", width: 4},
      thickness: 0.75, value: 9}}}
    ];
        
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {width: 400, height: 500, margin: {t: 0, b: 0}};
    Plotly.newPlot("gauge", data, gaugeLayout);

     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", data, gaugeLayout);
  });
}
