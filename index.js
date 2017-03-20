console.log("my tracery demo");

//ideas: 
// a cloak of gone

$(document).ready(function () {

    var grammar = {
        "origin": ["#treasure#"],
        "treasure": ["#normalTreasure#", "#normalTreasurePl#", "#liquidTreasure#", "#amberTreasure#", "#twoNouns#"], 
        "twoNouns": ["A #singthing# #singthing#"],
        "normalTreasure": ["A #magicAdj# #magicNounOrNot# #singthing#"],
        "normalTreasurePl": ["A #container# of #magicAdj# #magicNounOrNot# #singthing.s#"],
        "amberTreasure": ["A #caughtThing# encased in amber"],
        "liquidTreasure": ["A #liquidContainer# of #magicAdj# #liquidThings#"],
        "container": "pouch|rucksack|glove compartment|bag|locket|briefcase|#matMod# #hardMat# #box#|book|snuff tin|#liquidContainer#".split("|"),
        "liquidContainer": ["bottle", "vial", "syringe"],  
        "box":"chest|box|jewellery box|music box".split("|"),
        "hardMat": "black ash|ivory|mahogany|tin|steel|black birch|walnut|ironwood|desert ironwood|red cedar|white oak|teak|bamboo".split("|"),  
        "matMod": "|scratched|worn|beaten-up|pristine|polished|fire-touched".split("|"),
        "promiseType": ["","rash","unspoken","hellbound", "unspent", "tear-stained", "whispering", "crow", "fairy","seductive", "insane", "unfulfilled", "broken", "final"],
        "caughtThing": ["fairy", "sprite", "wisp", "#animal# tear", "#natureNoun# spirit"],
        "liquidThings": ["#allCreature# blood", "#allCreature# tears", "#mythBeast# ichor"],
        "liquidPrep": " | | | | | | | | | |reduced|concentrated|boiled|evaporated|distilled|condensed|frozen".split("|"),
        "allCreature": ["#animal#", "#mythBeast#"],
        "magicAdj": "forgotten|sentient|possessed|flying|gilded|tiny|holy|well-travelled|historied|phasing|vibrating|shimmering|blood-drinking|murmuring|ancient|royal|ethereal|subliminal|sidhe|unspoken|unthere|unholy|glitching|whispering|blood-stained|magical|fae|cursed|dark|divine|celestial|cold".split("|"),
        "singthing": "wand|apron|costume|necklace|helm|whistle|seed|fan|tooth|skull|finger|root|anger|lust|kiss|joke|heart|rumour|whisper|snowflake|light|crossbow|snow globe|love letter|letter|treasure map|brooch|map|saddle|music box|miniature chest|children's book|monacle|toy soldier|crystal|egg|breastplate|painting|earring|tiara|crown|animal statue|doll|deed|bird-cage|head|manual|relic|flower|wedding dress|chess set|puzzle box|crystal ball|straight-razor|journal|snare|dagger|statuette|symbol|cloak|riddle|word|blessing|mask|pendant|mirror|horn|gem|garland|pebble|harp|petal|demon|bean|potion|#promiseType# promise|true name|portal|scroll|coin".split("|"),
        "magicNounOrNot": ["", "#magicNoun#"],
        "magicNoun": "time|demon|fairy|star|#mythBeast#".split("|"), 
        "mythBeast": "sprite|wisp|leprechaun|ogre|troll|vampire|werewolf|ghost|mermaid|fairy|pixie|satyr|dryad|cheshire cat".split("|"),
        "animal": "unicorn|snake|raven|sparrow|scorpion|coyote|eagle|owl|lizard|zebra|duck|kitten".split("|"),
    "natureNoun": ["ocean", "mountain", "forest", "cloud", "river", "tree", "sky", "sea", "desert"]
}


    function doAGrammar() {
        $("#output").html("");
        var sought = $("#sought").val();
        var gr = tracery.createGrammar(grammar);
        var attempts = 0;
        var matching = 0;
        while(attempts < 300 && matching < 20) {
            attempts ++;
            var s = gr.flatten("#origin#");
            if ((s.indexOf(sought) > -1) || !sought || sought.length == 0) {
                var div = $("<div/>", {
                    class: "outputSample",
                    html: s
                });
                $("#output").append(div);
                matching ++;
            }

        
        }
        $('#grammarOut').html(JSON.stringify(grammar));
    }
    
    $('#again').click(doAGrammar);
    
    setTimeout(function () {

        doAGrammar();
    }, 30);

});