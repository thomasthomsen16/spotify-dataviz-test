         // Setup API options
         const options = {
            config: {
                // Vega-Lite default configuration
            },
            init: (view) => {
                // Initialize tooltip handler
                view.tooltip(new vegaTooltip.Handler().call);
            },
            view: {
                // View constructor options
                renderer: "canvas",
            },
        };
      
        // Register vega and vega-lite with the API
        vl.register(vega, vegaLite, options);
      
        // Linking to Vega dataset
        const dataSet = "https://raw.githubusercontent.com/thomasthomsen16/hot100data/refs/heads/main/Hot100.csv";