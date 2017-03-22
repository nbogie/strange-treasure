console.log("my tracery demo");

//ideas: 
// a cloak of gone

$(document).ready(function () {
    var pipe = "|"
    var grammar = {
        "origin": ["#treasure#", "#treasure#, #history#"],
        "treasure": "#normalTreasure#|#normalTreasurePl#|#liquidTreasure#|#trappedTreasure#".split(pipe), 
        "history": ["passed down through generations of #mythBeast#", "thought long lost in the #event#", "forged by #mythBeast#", "born in the #event#", "dating from the #event#", "forgotten by man", "long hidden by #mythBeast#", "once fought over by #mythBeast#", "once treasured by #mythBeast#"],
        "twoNouns": ["#singthing# #singthing#"],
        "event": ["#battle#", "time of the #mythBeast#", "last days of #mythBeast#", "All-Dark", "Night", "fire", "Last Storm", "great flood", "reset", "undertow", "reverse", "mirror-day", "Trouble", "#mythBeast# uprising", "#mythBeast# rebellion", "#mythBeast# exodus", "apocalypse", "zombie apocalypse"],
        "battle": ["#mythBeast# killing", "last battle between #mythBeast# and #mythBeast#", "#mythBeast# war"],
        "normalTreasure": ["A #magicAdj# #magicNounOrNot# #singthing##effectOrNot#"],
        "normalTreasurePl": ["A #container# of #magicAdj# #magicNounOrNot# #singthing.s#"],
        "trappedTreasure": ["A #caughtThing# #trapDesc#"],
        "trapDesc": ["trapped in a #trap#", "encased in amber"],
        "trap": "pocket-watch|leather pouch|locket|snuff box|mirror|statuette|bird-cage|dagger".split(pipe),
        "liquidTreasure": ["A #liquidContainer# of #magicAdj# #liquidThings#"],
        "container": "pouch|rucksack|glove compartment|bag|locket|briefcase|#matMod# #hardMat# #box#|book|snuff tin|#liquidContainer#".split(pipe),
        "liquidContainer": ["bottle", "vial", "syringe"],  
        "box":"chest|box|jewellery box|music box".split(pipe),
        "hardMat": "black ash|ivory|mahogany|tin|steel|black birch|walnut|ironwood|desert ironwood|red cedar|white oak|teak|bamboo".split(pipe),  
        "matMod": "|scratched|worn|beaten-up|pristine|polished|fire-touched".split(pipe),
        "promiseType": " |rash|unspoken|hellbound|unspent|tear-stained|whispering|crow|fairy|seductive|insane|unfulfilled|broken|final".split(pipe),
        "caughtThing": "fairy|sprite|wisp|#natureNoun# spirit|#mythBeast# scream|#mythBeast# whisper".split(pipe),
        "liquidThings": ["#allCreature# blood", "#allCreature# tears", "#mythBeast# ichor"],
        "liquidPrep": " | | | | | | | | | |reduced|concentrated|boiled|evaporated|distilled|condensed|frozen".split(pipe),
        "allCreature": ["#animal#", "#mythBeast#"],
        "singthing": "shadow|heartbreak|love|song|melody|story|knowing|science|sadness|drum|wand|apron|costume|necklace|helm|whistle|seed|fan|tooth|skull|finger|root|anger|lust|kiss|joke|heart|rumour|whisper|snowflake|light|crossbow|holy symbol|holy relic|snow-globe|love-letter|treasure-map|letter|brooch|map|saddle|crystal|#magicNoun#-egg|breastplate|painting|earring|tiara|crown|monacle|music box|miniature chest|children's book|toy soldier|animal statue|doll|deed|bird-cage|head|manual|relic|flower|wedding dress|chess set|puzzle box|crystal ball|portal|scroll|coin|fire|straight-razor|journal|snare|dagger|statuette|symbol|cloak|riddle|word|blessing|mask|pendant|mirror|horn|gem|garland|pebble|harp|petal|demon|bean|potion|frost|#promiseType# promise|true name".split(pipe),
        "effect": "creation|love|hatred|back-pedalling|charming|giddiness|silence|far-seeing|reversing|dreaming|wishing|killing|murderment|de-whereing|un-whenning|seduction|confusion|transmogrification|hypnosis|telewhen".split(pipe),
        "effectOrNot": ["", "", "", " of #effect#"],
        "magicAdj": "viral|guardian|malevolent|mischievious|magic-drained|forgotten|sentient|possessed|flying|gilded|tiny|holy|well-travelled|historied|phasing|vibrating|shimmering|blood-drinking|murmuring|ancient|royal|ethereal|subliminal|sidhe|unspoken|unthere|unholy|glitching|whispering|blood-stained|magical|fae|cursed|dark|burning|divine|celestial|cold|weeping".split(pipe),
        "magicNounOrNot": ["", "#magicNoun#"],
        "magicNoun": "shadow|parallel|song|magic|spell|word|fire|ice|wind|earth|glitch|shift|time|demon|fairy|star|#mythBeast#".split(pipe), 
        "mythBeastOrMan": ["#mythBeast#", "man"],
        "mythBeast": "zombie|griffin|hobgoblin|imp|manticore|harpy|minotaur|mutant|phoenix|sasquatch|shade|siren|shapeshifter|sphinx|sylph|thunderbird|valkyre|wendigo|wraith|goblin|elf|dwarf|cyclops|pegasus|kraken|dragon|basilisk|centaur|sprite|wisp|leprechaun|ogre|troll|vampire|werewolf|ghost|mermaid|fairy|pixie|satyr|dryad|cheshire cat".split(pipe),        
        "animal": "crocodile|unicorn|snake|raven|sparrow|scorpion|coyote|eagle|owl|lizard|zebra|duck|kitten".split(pipe),
        "natureNoun": "ocean|mountain|forest|cloud|river|tree|sky|sea|desert".split(pipe),
        "relationship": ["brother-in-arms", "sister-in-arms", "lover", "arch-enemy", "nemesis", "son", "father", "daughter", "mother"]
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