# Building a Chat Room in ASP.NET and Angular 7 in Visual Studio 2017 running under a VirtualBox Windows Machine on an old Sony VAIO

## Why?

I'm currently searching for my first job in software development. I sent my CV to a company and they replied asking me to build a chat room using their tooling, and to return to them a 'Visual Studio Solution file'. Now, as more of a Linux/Vim kind of guy, my initial instinct was to pass this over and look for something else. 




## Why in VirtualBox?

I haven't used a 'Visual \*' development environment since I was a child building a very ugly todo app for my sister in Visual Basic 6. I remember a lot of dragging and clicking and dropping of gui components.

It's also been a while since I owned a Microsoft Operating System. My previous employer had Windows XP (yes in 2020) and a few Windows 7 systems floating about. Security concerns aside (especially given the fact they stored a lot of student data...) these systems were functionally adequate for web browsing and word processing. 

I do not want to purchase a copy of Windows 10.

I have an old Windows 7 key.



### Why on a Sony VAIO?

My current laptop, a Dell Inspiron, suffered a rather nasty knock during a long-distance flight. My own fault. 

How necessary is it to have a good processor and lot of RAM. How far can I get on something old and haggard? Is it worth shelling out for the bleeding edge hardware when I spend most of my time on a laptop editing text files or blocking third-party JavaScript libraries in Firefox?

```
lshw -short
```

Tells me that this old haggard Sony VAIO laptop has an Intel(R) Core(TM) 2 Duo CPU @ 2.10 GHZ with 3 GiB of SODIMM DDR2 with a Mobility Radeon HD 3450/3470 and a 320GB Hitachi HTS54323. I believe the phone in my pocket outstrips these specifications. But my phone doesn't have a comfortable keyboard (I really like this one) and a 17" screen. 

The battery is especially haggard and lasts about 20 minutes. So I'm not going to be moving about from this desk beside a window much. That's okay--there are a couple of crows in the trees outside emitting encouraging, albeit ominous, caws.

How long does it take from pushing power to being inside Visual Studio 2017?

Once I'm inside Bash/Vim, the experience is relatively painless, aside from the rather nostalgically noisy fan. The heat isn't wasted on me, however, since it's cold here. And a bit of music makes the noise just about bearable. For the curious, I'm listening to [musicforprogramming.net](https://www.musicforprogramming.net).

## The Task

Build a chat room using ASP.NET and Angular 7.

Requirements:

- users should choose a (unique) display name
- users should send messages to the room
- users should see all messages delivered to the room in a timely fashion
- the history of the room should be available to all users
- there should be a bot that delivers amusing quips of some kind


## Setting up Windows 7 under VirtualBox

```
sudo apt install virtual box
```
Easy. Now I have VirtualBox. Time to load it up and build a Windows Machine.

[VirtualBox](https://www.virtualbox.org) might not have been the best choice given the limits of this system. But it's easy-to-use and if I can get it up and running and the performance is bearable, then I'll stick with it. Otherwise I might consider using [KVM](https://www.linux-kvm.org) instead.

I click the blue new button, name my virtual machine, 'Bill', and give it 2048MB of memory. Possibly a bit high but given that I intend on using it alone while I'm building this app, and, right now

```
free -m
```

tells me I am using 916, with browsers, terminals, and other distracting things going on, I think we'll just about be okay.

I create a virtual hard disk (VirtualBox Disk Image) of 32GB, the size of which will dynamically grow if necessary. 

With the Virtual Machine created I now need to point it towards 

VirtualBox complains that I have assigned too much memory to the VirtualMachine and the host operating system will run out. I'm not too concerned--I'm running ubuntu with lxde.

I right click on Bill, open settings -> storage and point the optical drive to my Windows 7 ISO I downloaded from Microsoft using an old key I fortunately still have.

I crank up the amount of Video Memory available to Bill to 128MB, and Enable 2D Video Acceleration. Something tells me that Visual Studio and all its fancy gui bells might need it.

I need internet so I make sure the Network Adapter is enabled under 'Network' and it is 'attached to NAT'. These defaults, from experience, should be sufficient for my current needs.

It's time to turn Bill on.

I can go full screen by pressing HOST+F (Right Ctrl + F). And now it's a matter of going through the Windows 7 installation process. This and my laptop's loud fan lead me to believe I have invented a time machine.

While 'Expanding Windows files (1%) ...' it's time to make some coffee.

Yay. Time to get things set up.

The first thing I notice is that when I try to go to full screen the Windows Display does not match the 16:9 ratio of my monitor. This is slightly annoying. I need to add something called 'Guest Additions' to Bill. This is done through the Virtual Machine's window. Devices -> Insert Guest Additions CD Image and following the prompts to download the iso.

We then open the cd and run through a standard windows installation wizard.

From here on out I'm going to do everything (including editing this text file) in Bill at full screen. Anyone looking over my shoulder would assume I am running Microsoft Windows 7 like a normal (albeit rather outdated) human.

Firefox

