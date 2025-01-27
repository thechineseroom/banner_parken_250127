(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bild = function() {
	this.initialize(img.bild);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,270);


(lib.parken_logo = function() {
	this.initialize(img.parken_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,60);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WhiteborderMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2SwMAAAglfIBtAAMAAAAlfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WhiteborderMC, new cjs.Rectangle(-5.5,-120,11,240), null);


(lib.Text4MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Ta steget och gör skillnad – på riktigt. ", "22px 'CircularXX'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 344;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text4MC, new cjs.Rectangle(0,0,348.1,60.1), null);


(lib.Text3MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text4test = new cjs.Text("15 000 kvadratmeter simulerad byggarbetsplats.", "22px 'CircularXX'", "#FFFFFF");
	this.text4test.name = "text4test";
	this.text4test.lineHeight = 29;
	this.text4test.lineWidth = 344;
	this.text4test.parent = this;
	this.text4test.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text4test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text3MC, new cjs.Rectangle(0,0,348.1,61.1), null);


(lib.Text2MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text2test = new cjs.Text("Upplevelsebaserade utbildningar för en sund och säker arbetsmiljö.", "22px 'CircularXX'", "#FFFFFF");
	this.text2test.name = "text2test";
	this.text2test.lineHeight = 29;
	this.text2test.lineWidth = 344;
	this.text2test.parent = this;
	this.text2test.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text2test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text2MC, new cjs.Rectangle(0,0,348.1,60.1), null);


(lib.TestSymbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text1test = new cjs.Text("Gör skillnad.", "bold 53px 'CircularXX'", "#26A7FF");
	this.text1test.name = "text1test";
	this.text1test.lineHeight = 67;
	this.text1test.lineWidth = 325;
	this.text1test.parent = this;
	this.text1test.setTransform(-40,-47);

	this.timeline.addTween(cjs.Tween.get(this.text1test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TestSymbol1, new cjs.Rectangle(-42,-49,329,69.2), null);


(lib.LogoMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.parken_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LogoMC, new cjs.Rectangle(0,0,180,60), null);


(lib.BlubackgroundMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B4B6F").s().p("EggQASwMAAAglfMBAhAAAMAAAAlfg");
	this.shape.setTransform(206.5,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlubackgroundMC, new cjs.Rectangle(0,0,413,240), null);


(lib.BackgroundMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bild();
	this.instance.setTransform(-310,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackgroundMC, new cjs.Rectangle(-310,-135,620,270), null);


// stage content:
(lib.test2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop(); // Stoppar tidslinjen på Frame 1
		
		// Sätt rubriken (text1) till synlig direkt
		this.text1.alpha = 1;
		
		// Sätt de andra texterna till osynliga från start
		this.text2.alpha = 0;
		this.text3.alpha = 0;
		this.text4.alpha = 0;
		
		// Zoom-funktion för bakgrunden
		function zoomBackground(scope) {
		    createjs.Tween.get(scope.bg, { loop: true })
		        .to({ scaleX: 1.05, scaleY: 1.05 }, 8000, createjs.Ease.quadInOut) // Zooma in lite
		        .to({ scaleX: 1, scaleY: 1 }, 8000, createjs.Ease.quadInOut); // Zooma ut igen
		}
		
		// Starta zoom-effekten
		zoomBackground(this);
		
		// Funktion som loopar genom texterna
		function loopTexts(scope) {
		    createjs.Tween.get(scope.text2)
		        .to({ alpha: 1 }, 1000)
		        .wait(3000)
		        .to({ alpha: 0 }, 1000)
		        .call(() => {
		            createjs.Tween.get(scope.text3)
		                .to({ alpha: 1 }, 1000)
		                .wait(3000)
		                .to({ alpha: 0 }, 1000)
		                .call(() => {
		                    createjs.Tween.get(scope.text4)
		                        .to({ alpha: 1 }, 1000)
		                        .wait(5000)
		                        .to({ alpha: 0 }, 1000)
		                        .call(() => loopTexts(scope)); // Starta om hela sekvensen
		                });
		        });
		}
		
		// Starta loopen med rätt kontext
		loopTexts(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.LogoMC();
	this.instance.setTransform(880,42,1,1,0,0,0,90,30);

	this.instance_1 = new lib.WhiteborderMC();
	this.instance_1.setTransform(413,120);

	this.text4 = new lib.Text4MC();
	this.text4.name = "text4";
	this.text4.setTransform(207,160.1,1,1,0,0,0,174,30.1);

	this.text3 = new lib.Text3MC();
	this.text3.name = "text3";
	this.text3.setTransform(207,160.1,1,1,0,0,0,174,30.1);

	this.text2 = new lib.Text2MC();
	this.text2.name = "text2";
	this.text2.setTransform(207,160.1,1,1,0,0,0,174,30.1);

	this.text1 = new lib.TestSymbol1();
	this.text1.name = "text1";
	this.text1.setTransform(127,93,1,1,0,0,0,52,8);

	this.instance_2 = new lib.BlubackgroundMC();
	this.instance_2.setTransform(206.5,120,1,1,0,0,0,206.5,120);

	this.bg = new lib.BackgroundMC();
	this.bg.name = "bg";
	this.bg.setTransform(723,122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.instance_2},{t:this.text1},{t:this.text2},{t:this.text3},{t:this.text4},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(490,107,543,150);
// library properties:
lib.properties = {
	id: 'FE62A4A6F090493DA9DC5A50C4BF5FA9',
	width: 980,
	height: 240,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bild.jpg", id:"bild"},
		{src:"images/parken_logo.png", id:"parken_logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FE62A4A6F090493DA9DC5A50C4BF5FA9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;