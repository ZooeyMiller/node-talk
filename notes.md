# wtf is node?

## but first, wtf is javascript?

+ In the early days of the internet there were a few different browsers, mainly it was microsoft internet explorer vs. netscape navigator (circa 1995)
+ netscape were like "fuk u microsoft" adn they decided they wanted to allow web pages to be more interactive
+ at the time they were p much just html so quite static
+ they hired this guy called Brendan Eich (he's kind of a jerk). He made javascript in 10 days.
+ wow
+ he was like "let's call it livescript" and people were like
+ no
+ so they thought "huh, there's a lot of hype about java, lets call it javascript" (it's got nothing to do with java)
+ and they were like
+ cool
+ and then microsoft were like "fuk u netscape" and reverse engineered the javascript engine for their own internet explorer browser
+ they called it jscript
+ what a bunch of dicks
+ in late 96' netscape were like "okay we need to standardise this language"
+ and w3c told them to fuck offa-brief-
+ so they went to European Computer Manufacturers Association and were like "hey lets standardise javascript. but we can't call it javascript. cause that's our thing"
+ thye said ok. They couldn't think of a good name so they used ECMAscript as a working title.
+ They never thought of a name, so it got called ECMAscript forever. Rubbish.
+ What we now know as Javascript is really ECMAscript, and there are various different implementaitons of it.

Lots of stuff happened. More browsers came and went. People were terrible. It was a part of history.

+ During this time, google became a thing
+ they were doing lots of shit
+ their web apps were really interactive and used a lot of dom manipulation and stuff so they wanted the javascript engine to be _faster_. reaaaaaaal fast.
+ they made a browser that launched in 2008
+ it was called chrome
+ they made the V8 javascript engine. It does a bunch of stuff I'm not going to explain. But it's fast. _real_ fast.
+ A person called Ryan Dahl was like "hey lets make it so we can use javascript on the server side"
+ at the time it could only be used in browsers
+ and he started the node.js project
+ This takes Google's V8 javascript engine (the realy fast one) and takes it **out** of the browser
+ sweet
+ now we can use javascript on the server side!
+ cool.
+ node comes together with the Node Package Manager (or NPM)
+ which is a way for people to share, distribute and use open source code. It is a huge part of the appeal of node. you've probs used it already
+ cool
+ node also has some core packages in it, you'll learn about some of these this week, they come bundled in with node and don't require you to install them
+ since node isn't in the browser it has access to things like your file system, so you can do cool stuff with it.

## Now, read the readme of the Node-Intro-Workshop repo. This was just to give you a little context of how node came about.
