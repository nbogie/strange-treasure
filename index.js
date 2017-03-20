console.log("my tracery demo");



$(document).ready(function () {

    var grammar = {
        "origin": ["#treasure#"],
        "treasure": ["#normalTreasure#", "#normalTreasurePl#", "#liquidTreasure#", "#amberTreasure#"], 
        "normalTreasurePl": ["A #container# of #magicAdj# #magicNounOrNot# #singthings.s#"],
        "normalTreasure": ["A #magicAdj# #magicNounOrNot# #singthings#"],
        "amberTreasure": ["A #caughtThings# encased in amber"],
        "liquidTreasure": ["A #liquidContainer# of #magicAdj# #liquidThings#"],
        "container": "pouch|rucksack|glove compartment|bag|locket|briefcase|#matMod# #hardMat# #box#|book|snuff tin|#liquidContainer#".split("|"),
        "box":"chest|box|jewellery box|music box".split("|"),
        "hardMat": "black ash|ivory|mahogany|tin|steel|black birch|walnut|ironwood|desert ironwood|red cedar|white oak|teak|bamboo".split("|"),  
        "matMod": "|scratched|worn|beaten-up|pristine|polished|fire-touched".split("|"),
        "liquidContainer": ["bottle", "vial", "syringe"],  
        "promiseType": ["","rash","unspoken","hellbound", "unspent", "tear-stained", "whispering", "crow", "fairy","seductive", "insane", "unfulfilled", "broken", "final"],
        "caughtThings": ["fairy", "sprite", "wisp", "#animal# tear", "#natureNoun# spirit"],
        "liquidThings": ["#allCreature# blood", "#allCreature# tears", "#mythBeast# ichor"],
        "liquidPrep": " | | | | | | | | | |reduced|concentrated|boiled|evaporated|distilled|condensed|frozen".split("|"),
        "allCreature": ["#animal#", "#mythBeast#"],
        "magicAdj": "ancient|royal|ethereal|subliminal|sidhe|unspoken|unthere|unholy|leaping|glitching|whispering|blood-stained|magical|fae|cursed|dark|divine|celestial|Dangerous|cold".split("|"),
        "singthings": "blessing|mask|pendant|mirror|horn|gem|garland|pebble|harp|petal|demon|bean|potion|#promiseType# promise|true name|portal|scroll|coin".split("|"),
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