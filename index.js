//ideas:
// a cloak of gone

const pipe = "|";
const grammarSource = {
  origin: ["#treasure#", "#treasure#, #history#"],
  treasure:
    "#normalTreasure#|#normalTreasurePl#|#liquidTreasure#|#trappedTreasure#".split(
      pipe
    ),
  history: [
    "fetched back from #strangeWhen#",
    "passed down through generations of warring #mythBeast#",
    "thought long lost in the #event#",
    "forged by #mythBeast#",
    "born in the #event#",
    "dating from the #event#",
    "from the never",
    "forgotten by man",
    "long hidden by #mythBeast#",
    "once fought over by #mythBeast#",
    "once treasured by #mythBeastMaybeDouble#",
  ],
  strangeWhen: [
    "time",
    "gone",
    "never",
    "again",
    "after",
    "before",
    "below",
    "tomorrow",
    "afterdark",
    "always",
  ],
  twoNouns: ["#singthing# #singthing#"],
  event: [
    "#strangeWhen#",
    "#battle#",
    "time of the #mythBeast#",
    "last days of #mythBeast#",
    "All-Dark",
    "Night",
    "fire",
    "Last Storm",
    "great flood",
    "reset",
    "undertow",
    "reverse",
    "mirror-day",
    "Trouble",
    "#mythBeast# uprising",
    "#mythBeast# rebellion",
    "#mythBeast# exodus",
    "apocalypse",
    "zombie apocalypse",
  ],
  battle: [
    "#mythBeast# killing",
    "last battle between #mythBeast# and #mythBeast#",
    "#mythBeast# war",
  ],
  normalTreasure: ["A #magicAdj# #magicNounOrNot# #singthing##effectOrNot#"],
  normalTreasurePl: [
    "A #container# of #magicAdj# #magicNounOrNot# #singthing.s#",
  ],
  trappedTreasure: ["A #caughtThing# #trapDesc#"],
  trapDesc: ["trapped in a #trap#", "encased in amber"],
  trap: "pocket-watch|leather pouch|locket|snuff box|mirror|statuette|bird-cage|dagger".split(
    pipe
  ),
  liquidTreasure: ["A #liquidContainer# of #magicAdj# #liquidThings#"],
  container:
    "necklace|pouch|rucksack|glove compartment|bag|locket|briefcase|#matMod# #hardMat# #box#|book|snuff tin|#liquidContainer#".split(
      pipe
    ),
  liquidContainer: ["bottle", "vial", "syringe"],
  box: "chest|box|jewellery box|music box".split(pipe),
  hardMat:
    "black ash|ivory|mahogany|tin|steel|black birch|walnut|ironwood|desert ironwood|red cedar|white oak|teak|bamboo".split(
      pipe
    ),
  matMod: "|scratched|worn|beaten-up|pristine|polished|fire-touched".split(
    pipe
  ),
  promiseType:
    " |rash|unspoken|hellbound|unspent|tear-stained|whispering|crow|fairy|seductive|insane|unfulfilled|broken|final".split(
      pipe
    ),
  caughtThing:
    "fairy|sprite|wisp|#natureNoun# spirit|#mythBeast# scream|#mythBeast# whisper".split(
      pipe
    ),
  liquidThings: [
    "#allCreature# blood",
    "#allCreature# tears",
    "#mythBeast# ichor",
  ],
  liquidPrep:
    " | | | | | | | | | |reduced|concentrated|boiled|evaporated|distilled|condensed|frozen".split(
      pipe
    ),
  allCreature: ["#animal#", "#mythBeast#"],
  singthing:
    "weapon|watch|deep|secret|haiku|curse|poem|shadow|heartbreak|love|song|melody|story|knowing|science|sadness|drum|wand|apron|costume|necklace|helm|whistle|seed|fan|tooth|skull|finger|root|anger|lust|kiss|joke|heart|rumour|whisper|snowflake|light|crossbow|snow-globe|love-letter|treasure-map|letter|brooch|map|saddle|crystal|#magicNoun#-egg|#strangeWhen#-egg|breastplate|painting|earring|tiara|crown|monacle|music box|miniature chest|children's book|toy soldier|doll|deed|bird-cage|head|manual|relic|flower|wedding dress|chess set|puzzle box|crystal ball|portal|scroll|coin|fire|straight-razor|journal|snare|dagger|figurine|symbol|cloak|riddle|word|blessing|mask|pendant|mirror|horn|gem|garland|pebble|harp|petal|demon|bean|potion|frost|holy symbol|holy relic|#promiseType# promise|true name".split(
      pipe
    ),
  effect:
    "gone|creation|love|hatred|back-pedalling|charming|giddiness|silence|far-seeing|reversing|dreaming|wishing|killing|murderment|de-whereing|un-whenning|seduction|confusion|transmogrification|hypnosis|telewhen".split(
      pipe
    ),
  effectOrNot: ["", "", "", " of #effect#"],
  magicAdj:
    "displaced|deep|time-wrenched|reversed|undone|immolated|burnt|silent|quiet|secret|viral|guardian|malevolent|mischievious|magic-drained|forgotten|sentient|possessed|flying|#magicNoun#-gilded|tiny|holy|well-travelled|historied|phasing|vibrating|shimmering|blood-drinking|murmuring|ancient|royal|ethereal|subliminal|sidhe|unspoken|unthere|unholy|glitching|whispering|blood-stained|magical|fae|cursed|dark|burning|divine|celestial|cold|weeping".split(
      pipe
    ),
  magicNounOrNot: ["", "#magicNoun#"],
  magicNoun:
    "sky|cloud|wishing|murder|battle|whisper|murmur|frost|love|hate|night|sun|shadow|parallel|song|magic|spell|word|fire|ice|wind|earth|glitch|shift|time|demon|fairy|star|#mythBeast#".split(
      pipe
    ),
  mythBeastMaybeDouble: [
    "#mythBeast#",
    "#mythBeast#",
    "#mythBeast# and #mythBeast# alike",
  ],
  mythBeastOrMan: ["#mythBeast#", "man"],
  mythBeast:
    "zombie|griffin|hobgoblin|imp|manticore|harpy|minotaur|mutant|phoenix|sasquatch|shade|siren|shapeshifter|sphinx|sylph|thunderbird|valkyre|wendigo|wraith|goblin|elf|dwarf|cyclops|pegasus|kraken|dragon|basilisk|centaur|sprite|wisp|leprechaun|ogre|troll|vampire|werewolf|ghost|mermaid|fairy|pixie|satyr|dryad|cheshire cat".split(
      pipe
    ),
  animal:
    "crocodile|unicorn|snake|raven|sparrow|scorpion|coyote|eagle|owl|lizard|zebra|duck|kitten".split(
      pipe
    ),
  natureNoun: "ocean|mountain|forest|cloud|river|tree|sky|sea|desert".split(
    pipe
  ),
  relationship: [
    "brother-in-arms",
    "sister-in-arms",
    "lover",
    "arch-enemy",
    "nemesis",
    "son",
    "father",
    "daughter",
    "mother",
  ],
};

function elemOrFail(id) {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error("Can't find required page element with id: " + id);
  }
  return el;
}

function doAGrammar() {
  const outputElem = elemOrFail("output");
  outputElem.innerText = "";

  // @ts-ignore
  const sought = elemOrFail("sought").value;
  // @ts-ignore
  const grammar = tracery.createGrammar(grammarSource);

  let attemptCount = 0;
  let matchedCount = 0;

  while (attemptCount < 300 && matchedCount < 10) {
    attemptCount++;
    const generatedText = grammar.flatten("#origin#");
    if (generatedText.includes(sought) || !sought || sought.length == 0) {
      append(generatedText, outputElem);
      matchedCount++;
    }
  }
  elemOrFail("grammarOut").innerHTML = JSON.stringify(grammarSource, null, 2);
}

function append(generatedText, outputElem) {
  const outputDiv = document.createElement("div");
  outputDiv.className = "outputSample";
  outputDiv.innerText = generatedText;
  outputElem.append(outputDiv);
}

const genButton = elemOrFail("generateButton");
genButton.addEventListener("click", doAGrammar);

const searchTextElem = elemOrFail("sought");
searchTextElem.onkeydown = function (e) {
  if (e.key == "Enter") {
    doAGrammar();
  }
};

window.addEventListener("load", function () {
  doAGrammar();
});
