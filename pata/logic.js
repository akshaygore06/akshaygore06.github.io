var circles = [];

	var keyData= {
		a: {
			color : "pink",
			sound : new Howl({
				src: ['sounds/bubbles.mp3']	
			})

		},
		b: {
			color : "orange",
			sound : new Howl({
				src: ['sounds/clay.mp3']
			})
		},

	    c: {
			color : "green",
			sound : new Howl({
				src: ['sounds/confetti.mp3']
			})
		},
		d: {
			color : "cyan",
			sound : new Howl({
				src: ['sounds/corona.mp3']
			})
		},
		e: {
			color : "cadetblue",
			sound : new Howl({
				src: ['sounds/dotted-spiral.mp3']
			})
		 },
		f: {
			color : "cornflowerblue",
			sound : new Howl({
				src: ['sounds/flash-1.mp3']
			})
		},
		g: {
			color : "YellowGreen",
			sound : new Howl({
				src: ['sounds/flash-2.mp3']
			})
		},
		h: {
			color : "Teal",
			sound : new Howl({
				src: ['sounds/flash-3.mp3']
			})
		},
		i: {
			color : "DarkTurquoise",
			sound : new Howl({
				src: ['sounds/glimmer.mp3']
			})
		},
		j: {
			color : "DarkSalmon",
			sound : new Howl({
				src: ['sounds/moon.mp3']
			})
		},
		k: {
			color : "DarkSeaGreen",
			sound : new Howl({
				src: ['sounds/pinwheel.mp3']
			})
		},
		l: {
			color : "DarkSlateBlue",
			sound : new Howl({
				src: ['sounds/piston-1.mp3']
			})
		},
		m: {
			color : "DeepPink",
			sound : new Howl({
				src: ['sounds/piston-2.mp3']
			})
		},
		n: {
			color : "LightSteelBlue",
			sound : new Howl({
				src: ['sounds/piston-3.mp3']
			})
		},
		o: {
			color : "DimGray",
			sound : new Howl({
				src: ['sounds/prism-1.mp3']
			})
		},
		p: {
			color : "GoldenRod",
			sound : new Howl({
				src: ['sounds/prism-2.mp3']
			})
		},
		q: {
			color : "IndianRed",
			sound : new Howl({
				src: ['sounds/prism-3.mp3']
			})
		},
		r: {
			color : "MidnightBlue",
			sound : new Howl({
				src: ['sounds/splits.mp3']
			})
		},
		s: {
			color : "NavajoWhite",
			sound : new Howl({
				src: ['sounds/squiggle.mp3']
			})
		},
		t: {
			color : "PowderBlue",
			sound : new Howl({
				src: ['sounds/strike.mp3']
			})
		},
		u: {
			color : "Steelblue",
			sound : new Howl({
				src: ['sounds/suspension.mp3']
			})
		},
		v: {
			color : "tan",
			sound : new Howl({
				src: ['sounds/timer.mp3']
			})
		},
		w: {
			color : "red",
			sound : new Howl({
				src: ['sounds/ufo.mp3']
			})
		},
		x: {
			color : "Orchid",
			sound : new Howl({
				src: ['sounds/veil.mp3']
			})
		},
		y: {
			color : "BurlyWood",
			sound : new Howl({
				src: ['sounds/wipe.mp3']
			})
		},
		z: {
			color : "RebeccaPurple",
			sound : new Howl({
				src: ['sounds/zig-zag.mp3']
			})
		}


	}

	function onKeyDown(event) {
		var maxPoint = new Point(view.size.width, view.size.height);
		//var ramdomPoint = 
		var point = Point.random() * maxPoint;
		var radius = Math.random() * 500;
	 	var circle = new Path.Circle(point, radius);
	 	circle.fillColor = keyData[event.key].color;
	 	keyData[event.key].sound.play();

	 	circles.push(circle);

	
	}

		function onFrame(event){
			for(var i = 0; i < circles.length;i++ )
			{	
				circles[i].fillColor.hue +=1;
				circles[i].scale(0.9);
				if(circles[i].area < 1)
				{
			      circles[i].remove();
			      circles.splice(i, 1);
				    //  console.log(circles);
				}
			}
		}
