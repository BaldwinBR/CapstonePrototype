// Import feature viewer
import {FeatureViewer} from "./src/feature-viewer";

// Import styles
import './example.scss';


//TODO: Import data from file instead of set in variable 

let sequence = "MEEPQSDPSIEPPLSQETFSDLWKLLPENNVLSPLPSQAVDDLMLSPDDLAQWLTEDPGPDEAPRMSEAAPPMAPTPAAPTPAAPAPAPSWPLSSSVPSQKTYHGSYGF" + 
                "RLGFLHSGTAKSVTCTYSPDLNKMFCQLAKTCPVQLWVDSTPPPGSRVRAMAIYKQSQHMTEVVRRCPHHERCSDSDGLAPPQHLIRVEGNLRVEYSDDRNTFRHSVV" + 
                "VPYEPPEVGSDCTTIHYNYMCNSSCMGGMNRRPILTIITLEDSSGNLLGRNSFEVRVCACPGRDRRTEEENFRKKGEPCHQLPPGSTKRALPNNTSSSPQPKKKPLDG" + 
                "EYFTLQIRGRERFEMFRELNEALELKDAQAGKEPAGSRAHSSHLKSKKGQSTSRHKKFMFKTEGPDSD";

let raw_Disorder_Binary = "22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222" +
                        "22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222" + 
                        "22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222" + 
                        "222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222";

let raw_VSL_Binary = "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111100" + 
                    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" + 
                    "0000000000000000000000000000000000000000000000000000000000000000000000000001111111111111111111111111111" + 
                    "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";

let raw_VSL_Score = "0.97,0.97,0.97,0.97,0.96,0.96,0.96,0.96,0.95,0.95,0.94,0.94,0.94,0.93,0.92,0.91,0.91,0.90,0.89,0.88,0.86,0.85, 0.82,0.80,0.79,0.80,0.80,0.81,0.80,0.81,0.81,0.81,0.81,0.81,0.80,0.80,0.80,0.80,0.80,0.79,0.81,0.82,0.81,0.80,0.82,0.82,0.83,0.83,0.84,0.86,0.87,0.88,0.90,0.92,0.93,0.94,0.95,0.96,0.97,0.97,0.97,0.98,0.98,0.98,0.98,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.98,0.98,0.97,0.97,0.96,0.96,0.95,0.95,0.94,0.93,0.92,0.91,0.89,0.88,0.87,0.85,0.83,0.81,0.80,0.78,0.77,0.75,0.72,0.69,0.66,0.62,0.58,0.54,0.50,0.46,0.45,0.43,0.40,0.39,0.34,0.34,0.34,0.34,0.36,0.39,0.41,0.43,0.43,0.39,0.37,0.33,0.31,0.30,0.29,0.28,0.27,0.25,0.24,0.21,0.18,0.17,0.15,0.15,0.14,0.14,0.14,0.16,0.15,0.16,0.16,0.20,0.24,0.28,0.34,0.38,0.43,0.48,0.51,0.54,0.54,0.54,0.52,0.51,0.49,0.46,0.43,0.45,0.48,0.51,0.52,0.53,0.53,0.54,0.52,0.53,0.55,0.56,0.56,0.59,0.58,0.59,0.56,0.58,0.61,0.64,0.65,0.66,0.67,0.68,0.68,0.69,0.68,0.67,0.64,0.61,0.56,0.52,0.49,0.47,0.48,0.49,0.49,0.48,0.48,0.49,0.48,0.48,0.48,0.46,0.46,0.47,0.49,0.51,0.52,0.54,0.53,0.50,0.46,0.42,0.39,0.36,0.34,0.33,0.34,0.40,0.45,0.46,0.49,0.54,0.51,0.51,0.49,0.47,0.44,0.40,0.34,0.31,0.28,0.29,0.27,0.27,0.27,0.30,0.30,0.33,0.37,0.38,0.41,0.43,0.42,0.43,0.42,0.39,0.36,0.35,0.33,0.29,0.31,0.32,0.32,0.32,0.34,0.40,0.43,0.46,0.47,0.51,0.55,0.56,0.57,0.57,0.58,0.58,0.59,0.59,0.58,0.59,0.60,0.60,0.61,0.62,0.63,0.67,0.69,0.70,0.73,0.75,0.77,0.81,0.83,0.84,0.86,0.88,0.89,0.90,0.92,0.93,0.93,0.94,0.94,0.94,0.95,0.95,0.95,0.95,0.95,0.95,0.95,0.95,0.95,0.95,0.96,0.96,0.96,0.96,0.95,0.95,0.95,0.94,0.93,0.93,0.92,0.91,0.91,0.90,0.89,0.88,0.87,0.86,0.85,0.83,0.81,0.77,0.77,0.77,0.77,0.76,0.75,0.74,0.74,0.73,0.73,0.73,0.73,0.73,0.73,0.73,0.74,0.75,0.76,0.76,0.77,0.77,0.78,0.78,0.79,0.80,0.81,0.82,0.82,0.83,0.84,0.86,0.87,0.88,0.90,0.91,0.92,0.93,0.94,0.95,0.95,0.96,0.96,0.96,0.97,0.97,0.97,0.97,0.97,0.98,0.98,0.98,0.98,0.98,0.98,0.98,0.98,0.98,0.98,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99";




let Disorder_Binary = Array.from(raw_Disorder_Binary, Number);
let VSL_Binary = Array.from(raw_VSL_Binary, Number);

function extractSegments(binaryArray) {
    let ones: { x: number; y: number; color: string; stroke: string }[] = [];
    let twos: { x: number; y: number; color: string; stroke: string }[] = [];
    
    let currentValue = null;
    let start = 0;
    
    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] !== currentValue) {
            // If we were tracking a segment, close it
            if (currentValue !== null) {
                let segment = {
                    x: start,
                    y: i - 1,
                    color: "#gray",
                    stroke: "black"
                };
                if (currentValue === 1) {
                    ones.push(segment);
                } else {
                    twos.push(segment);
                }
            }
            // Start a new segment
            currentValue = binaryArray[i];
            start = i;
        }
    }
    
    // Add the last segment if any
    if (currentValue !== null) {
        let segment = {
            x: start,
            y: binaryArray.length - 1,
            color: "#gray",
            stroke: "black"
        };
        if (currentValue === 1) {
            ones.push(segment);
        } else {
            twos.push(segment);
        }
    }

    return { ones, twos };
}





// TODO Wait for page to load
window.onload = () => {

    let result = extractSegments(Disorder_Binary);
    let vslResults = extractSegments(VSL_Binary)

    console.log("Ones:", result.ones);
    console.log("Twos:", result.twos);

    console.log(sequence.length);


    // Instantiate feature viewer
    let featureViewer = new FeatureViewer(sequence, '#feature-viewer',
    // Define optional settings
    {
        toolbar: true,
        toolbarPosition: 'left',
        brushActive: true,
        zoomMax: 5,
        flagColor: 'white',
        flagTrack: 170,
        flagTrackMobile: 150
    },
    // Define optional features
    [
        {
            type: 'rect',
            id: 'Native_Disorder',
            label: 'Native Disorder',
            data: result.ones,
            color:'grey'
        },
        {
            type: 'rect',
            id: 'Unk_Exp_Disoredered_Residues',
            label: 'Not Avaliable',
            data: result.twos,
            color:'grey'
        },
        {
            type: 'rect',
            id: 'Putative_Disorder',
            label: 'Putative Diorder',
            data: vslResults.ones,
            color:'grey'
        },
        {
            type: 'curve',
            id: 'Curve1',
            label: 'Predictive Disorder Score',
            color: '#75fd63',
            height: 3,
            data: Array.from(new Array(sequence.length), (x, i) => ({x: i + 1, y: Math.random()})),
           
            
        },
    ]);
};
