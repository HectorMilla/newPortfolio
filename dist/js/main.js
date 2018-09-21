// js for story generator

const activities = ["Reading", "Hiking", "Watching Netflix"];
const verbs = ["spending time", "relaxing", "dancing"];
const nouns = ["friends", "cat", "family"];

const random = phrase => Math.floor(Math.random() * phrase);
const writeStory = () => {
  const activity = document.getElementById("empty-activity");
  const verb = document.getElementById("empty-verb");
  const noun = document.getElementById("empty-noun");

  activity.innerHTML = activities[random(activities.length)];
  activity.classList.add("random");
  verb.innerHTML = verbs[random(verbs.length)];
  verb.classList.add("random");
  noun.innerHTML = nouns[random(nouns.length)];
  noun.classList.add("random");
};
