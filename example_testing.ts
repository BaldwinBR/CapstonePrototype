// Import feature viewer
import {FeatureViewer} from "./src/feature-viewer";

// Import styles
import './example.scss';

// TODO Wait for page to load
window.onload = () => {
    // Define sequence
    let sequence = "MDPGQQPPPQPAPQGQGQPPSQPPQGQGPPSGPGQPAPAATQAAPQAPPAGHQIVHVRGDSETDLEALFNAVMNPKTANVPQTVPMRLRKLPDSF" +
                   "FKPPEPKSHSRQASTDAGTAGALTPQHVRAHSSPASLQLGAVSPGTLTPTGVVSGPAATPTAQHLRQSSFEIPDDVPLPAGWEMAKTSSGQRYFL" +
                   "NHIDQTTTWQDPRKAMLSQMNVTAPTSPPVQQNMMNSASGPLPDGWEQAMTQDGEIYYINHKNKTTSWLDPRLDPRFAMNQRISQSAPVKQPPPL" +
                   "APQSPQGGVMGGSNSNQQQQMRLQQLQMEKERLRLKQQELLRQAMRNINPSTANSPKCQELALRSQLPTLEQDGGTQNPVSSPGMSQELRTMTTN" +
                   "SSDPFLNSGTYHSRDESTDSGLSMSSYSVPRTPDDFLNSVDEMDTGDTINQSTLPSQQNRFPDYLEAIPGTNVDLGTLEGDGMNIEGEELMPSLQ" +
                   "EALSSDILNDMESVLAATKLDKESFLTWL";
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
            data: [{"x": 1, "y": 58, "color": "#gray", "stroke": "black"}, {"x": 60, "y": 61, "color": "#gray", "stroke": "black"}, {"x": 75, "y": 82, "color": "#gray", "stroke": "black"}, {"x": 101, "y": 170, "color": "#gray", "stroke": "black"}, {"x": 206, "y": 230, "color": "#gray", "stroke": "black"}, {"x": 264, "y": 300, "color": "#gray", "stroke": "black"}, {"x": 330, "y": 504, "color": "#gray", "stroke": "black"}],
            color:'grey'
        },
        {
            type: 'rect',
            id: 'Putative_Disorder',
            label: 'Putative Diorder',
            data: [{"x": 1, "y": 49, "color": "#75fd63", "stroke": "black"}, {"x": 52, "y": 58, "color": "#75fd63", "stroke": "black"}, {"x": 74, "y": 74, "color": "#75fd63", "stroke": "black"}, {"x": 78, "y": 85, "color": "#75fd63", "stroke": "black"}, {"x": 91, "y": 92, "color": "#75fd63", "stroke": "black"}, {"x": 98, "y": 108, "color": "#75fd63", "stroke": "black"}, {"x": 110, "y": 168, "color": "#75fd63", "stroke": "black"}, {"x": 172, "y": 174, "color": "#75fd63", "stroke": "black"}, {"x": 182, "y": 182, "color": "#75fd63", "stroke": "black"}, {"x": 185, "y": 186, "color": "#75fd63", "stroke": "black"}, {"x": 201, "y": 201, "color": "#75fd63", "stroke": "black"}, {"x": 212, "y": 213, "color": "#75fd63", "stroke": "black"}, {"x": 215, "y": 220, "color": "#75fd63", "stroke": "black"}, {"x": 223, "y": 224, "color": "#75fd63", "stroke": "black"}, {"x": 226, "y": 228, "color": "#75fd63", "stroke": "black"}, {"x": 231, "y": 233, "color": "#75fd63", "stroke": "black"}, {"x": 241, "y": 241, "color": "#75fd63", "stroke": "black"}, {"x": 245, "y": 245, "color": "#75fd63", "stroke": "black"}, {"x": 260, "y": 260, "color": "#75fd63", "stroke": "black"}, {"x": 276, "y": 297, "color": "#75fd63", "stroke": "black"}, {"x": 334, "y": 334, "color": "#75fd63", "stroke": "black"}, {"x": 340, "y": 340, "color": "#75fd63", "stroke": "black"}, {"x": 353, "y": 383, "color": "#75fd63", "stroke": "black"}, {"x": 386, "y": 415, "color": "#75fd63", "stroke": "black"}, {"x": 417, "y": 418, "color": "#75fd63", "stroke": "black"}, {"x": 420, "y": 443, "color": "#75fd63", "stroke": "black"}, {"x": 447, "y": 474, "color": "#75fd63", "stroke": "black"}, {"x": 494, "y": 494, "color": "#75fd63", "stroke": "black"}, {"x": 496, "y": 496, "color": "#75fd63", "stroke": "black"}, {"x": 503, "y": 504, "color": "#75fd63", "stroke": "black"}],
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
