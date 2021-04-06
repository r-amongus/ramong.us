---
id: faq-technical
title: Technical Information
permalink: docs/faq-technical.html
layout: docs
category: FAQ
---

<style>
.scary > blockquote {
  background-color: rgba(237, 51, 21, 0.2);
  border-left-color: #ed3315;
}
</style>

### When I enter a lobby code, I get an error message saying "Could not find the game you're looking for".

Most likely you're in a different region than the one the code is for. Ask the person who gave you the lobby code in which region the lobby is hosted. You can switch regions by clicking on the little globe icon in the bottom right corner of the screen. The currently available regions are North America, Europe, and Asia.

### Why did I get banned from a lobby for hacking, even though I wasn't?

Most likely someone in your lobby was using third party software in conjunction with Among Us, and the game booted every player from the lobby, not just the person who used that software. You can still join other lobbies or make new ones yourself without any issues. 

Getting booted for hacking is not uncommon for people who use Crewlink, or other software for Proximity Chat. If this happens, just make a new lobby or ask your host to make a new one, and continue playing on as usual. There is no need to worry about being penalized any further for this.

### Why do I sometimes have to wait 5 minutes before I can play again after I disconnect or leave a game?

If you disconnect frequently from a game, there is a chance of triggering a 5-minute cooldown before you can join a new lobby. This penalty was introduced in november 2020 to combat the high amount of people intentionally disconnecting in public lobbies at the start of a game if they didn't get the role they wanted.

The game client can't tell the difference between people who leave the game intentionally and people with a faltering internet connection, nor can it tell the difference between people who leave a lobby for valid reasons and those who do not.

### Why does the game not accept my nickname?

Among Us has a pretty strict censorship filter, but it doesn't recognize words by themselves, instead it looks for blacklisted combinations of letters regardless of the context these letters are used in. This is known as the [Scunthorpe problem](https://en.wikipedia.org/wiki/Scunthorpe_problem). The filter doesn't allow people to use nicknames that contain a blacklisted combination of letters even if that player has the censorship filter turned off.

You can see which strings are banned by turning the censorship filter on and typing out the banned nickname in the chat.

### How can I use Halloween or Christmas hats?

You can restore Halloween hats by setting the date of your device to October and then booting up the game, and likewise for Christmas hats in December. 

### I joined a lobby and the map was reversed.

If the lobby host has the date on their device set to April 1st when creating a lobby on The Skeld, the map will mirror itself. This only applies to The Skeld.

### Somebody in my lobby is wearing a weirdly realistic looking mask.

That user is wearing the [Geoff Keighley mask](https://among-us.fandom.com/wiki/Geoff_Keighley_mask), a limited edition mask that players could receive if they watched The Game Awards 2020 live on Twitch. It is currently not possible to get the hat again without external modification.

### Somebody named Eris Loris/Sire Sirol joined my lobby and told me he hacked it, and that he has all my personal info. Should I be worried?

That wasn't a real person, but a bot, and it's a standard copy-paste message that you'll probably see more of if you play in public lobbies often. This problem is far less pervasive in private lobbies. But other than being obnoxious, it's not a problem you need to worry about; nobody can access your device or see your personal information through the Among Us client. The threats are empty.

### How can I change/reset my date of birth?

#### PC

<div class="scary">

>Caution:
>
>Removing the `playerPrefs` file can have unintended consequences such as removing all personalized hats, pets, and skins. It is recommended to **change** the file instead of removing it due to its settings.

</div>

Navigate to the following folder by copying and pasting the filepath below (replacing [YOURNAME] with your username on Windows), opening File Explorer, clicking on the menu bar at the top, pasting the copied filepath and hitting `Enter`.

`C:\Users\[YOURNAME]\AppData\LocalLow\Innersloth\Among Us`

Look for the file "playerPrefs" and delete it. Upon rebooting the game a new file will be created, and the game will ask you to enter your date of birth again. If you don't want to delete the file, you can also open it in a text editor, look up your date of birth, and change it manually.

#### Android

Connect your phone to your PC. Your personal information is saved in the following location:

`Phone\Android\data\com.innersloth.spacemafia\files`

Look for the file "playerPrefs" and delete it. Upon rebooting the game a new file will be created, and the game will ask you to enter your date of birth again. If you don't want to delete the file, you can also open it in a text editor, look up your date of birth, and change it manually.

#### iOS/Nintendo Switch

It is currently not possible to change your date of birth on either of these platforms.

### How do I transfer my game stats over between devices?

#### PC to PC

Navigate to the following folder by copying and pasting the filepath below (replacing [YOURNAME] with your username on Windows), opening File Explorer, clicking on the menu bar at the top, pasting the copied filepath and hitting `Enter`.

`C:\Users\[YOURNAME]\AppData\LocalLow\Innersloth\Among Us`

Copy and paste the contents of that folder from your old PC to your new one, and it should transfer your old stats right over.
