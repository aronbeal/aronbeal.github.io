"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('resume/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	var _this = this;
	//export default DS.FixtureAdapter.extend({});
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		//namespace: 'api/v1',
		namespace: 'api',
		host: 'http://localhost:4200',
		ajaxError: function ajaxError() /*jqXHR*/{
			_this.transitionTo('/error');
		}
	});
});
//import Ember from 'ember';
define('resume/adapters/blog-post', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {

    /*
    https://www.googleapis.com/blogger/v3/blogs/6875448374345268038/posts?key=AIzaSyCAeti_K7wclgbsnnoXUnlhQNW46ZWQR0E
     */
    exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
        host: 'https://public-api.wordpress.com',
        blogId: 'aronbealme.wordpress.com',
        namespace: 'rest/v1.1',
        defaultSerializer: 'blog-post',
        ajaxOptions: function ajaxOptions(url, type, options) {
            var hash = this._super(url, type, options);
            hash.dataType = "jsonp";
            return hash;
        },
        pathForType: function pathForType(modelName) {
            //modelName === 'project'.
            return 'blog-post';
        },
        _request: function _request(store, type, url) {
            return new _ember['default'].RSVP.Promise(function (resolve, reject) {
                _ember['default'].$.getJSON(url).then(function (data) {
                    _ember['default'].run(null, resolve, data);
                }, function (jqXHR) {
                    jqXHR.then = null; // tame jQuery's ill mannered promises
                    _ember['default'].run(null, reject, jqXHR);
                });
            });
        },
        findAll: function findAll(store, type, sinceToken) {
            var url = this.buildURL(type.typeKey) + '/sites/' + this.get("blogId") + "/posts";
            return this._request(store, type, url);
        },
        findRecord: function findRecord(store, type, id, snapshot) {
            console.log("FindRecord.  store", store, ", type", type);
            var url = this.buildURL(type.typeKey) + '/sites/' + this.get("blogId") + "/posts/" + id;
            return this._request(store, type, url);
        },
        handleResponse: function handleResponse(status, headers, payload) {
            this._super.apply(this, arguments);
            console.log("handleResponse", status, headers, payload);
            if (payload.error !== undefined) {
                return new _emberData['default'].InvalidError(payload.error);
            }
            return payload;
        }
    });
});
define('resume/adapters/blogger-blog-post', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {

    /*
    https://www.googleapis.com/blogger/v3/blogs/6875448374345268038/posts?key=AIzaSyCAeti_K7wclgbsnnoXUnlhQNW46ZWQR0E
     */
    exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
        host: 'https://www.googleapis.com',
        blogId: '6875448374345268038',
        key: 'AIzaSyCAeti_K7wclgbsnnoXUnlhQNW46ZWQR0E',
        namespace: 'blogger/v3',
        defaultSerializer: 'blog',
        ajaxOptions: function ajaxOptions(url, type, options) {
            var hash = this._super(url, type, options);
            hash.dataType = "jsonp";
            return hash;
        },
        pathForType: function pathForType(modelName) {
            //modelName === 'project'.
            return 'blogs';
        },
        findAll: function findAll(store, type, sinceToken) {
            console.log("Findall.  store", store, ", type", type, 'sinceToken', sinceToken);
            // Do your thing here

            // var query = {
            //     key: this.get('key')
            // };
            // var url = this.buildURL(type.typeKey) + '/blogs/' + this.get("blogId") + "/posts";
            // console.log("Requesting url ", url);
            // var promise = this.ajax(url, 'GET', {
            //     data: query
            // });
            // //console.log("Request", promise);
            // return promise;

            var url = this.buildURL(type.typeKey) + '/blogs/' + this.get("blogId") + "/posts";
            var query = {
                key: this.get('key')
            };
            return new _ember['default'].RSVP.Promise(function (resolve, reject) {
                _ember['default'].$.getJSON(url, query).then(function (data) {
                    _ember['default'].run(null, resolve, data);
                }, function (jqXHR) {
                    jqXHR.then = null; // tame jQuery's ill mannered promises
                    _ember['default'].run(null, reject, jqXHR);
                });
            });
        },
        findRecord: function findRecord(store, type, id, snapshot) {
            console.log("FindRecord.  store", store, ", type", type);
            var url = this.buildURL(type.typeKey) + '/blogs/' + this.get("blogId") + "/posts/" + id;
            var query = {
                key: this.get('key')
            };
            return new _ember['default'].RSVP.Promise(function (resolve, reject) {
                _ember['default'].$.getJSON(url, query).then(function (data) {
                    _ember['default'].run(null, resolve, data);
                }, function (jqXHR) {
                    jqXHR.then = null; // tame jQuery's ill mannered promises
                    _ember['default'].run(null, reject, jqXHR);
                });
            });
        },
        query: function query(store, type, _query, recordArray) {
            console.log("Query.  store", store, ", type", type);
            // var url = type;
            // return new Ember.RSVP.Promise(function(resolve, reject) {
            //   Ember.$.getJSON(url, query).then(function(data) {
            //     Ember.run(null, resolve, data);
            //   }, function(jqXHR) {
            //     jqXHR.then = null; // tame jQuery's ill mannered promises
            //     Ember.run(null, reject, jqXHR);
            //   });
            // });
        },
        handleResponse: function handleResponse(status, headers, payload) {
            this._super.apply(this, arguments);
            console.log("handleResponse", status, headers, payload);
            if (payload.error !== undefined) {
                return new _emberData['default'].InvalidError(payload.error);
            }
            return payload;
        }
    });
});
define('resume/adapters/project', ['exports', 'ember-data'], function (exports, _emberData) {
    //import Ember from 'ember';

    exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
        //.https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLd06W5y1jnqHdtCOkwwY_yrTDqIpiO-Bw&key=
        host: 'https://www.googleapis.com',
        playlistId: 'PLd06W5y1jnqHdtCOkwwY_yrTDqIpiO-Bw',
        key: 'AIzaSyCAeti_K7wclgbsnnoXUnlhQNW46ZWQR0E',
        namespace: 'youtube/v3',
        defaultSerializer: 'project',
        plurals: {
            "project-thumbnail": "project-thumbnails"
        },
        ajaxOptions: function ajaxOptions(url, type, options) {
            var hash = this._super(url, type, options);
            hash.dataType = "jsonp";
            return hash;
        },
        pathForType: function pathForType() /*modelName*/{
            //modelName === 'project'.
            return 'playlistItems';
        },
        shouldReloadAll: function shouldReloadAll() /*store, snapshotRecordArray*/{
            return false; //won't change often enough to warrant rechecking
        },
        findAll: function findAll(store, type) /*sinceToken*/{
            //console.log("Findall.  store", store, ", type", type);
            // Do your thing here
            var query = {
                key: this.get('key'),
                part: 'snippet',
                playlistId: this.get('playlistId')
            };
            var url = this.buildURL(type.typeKey) + '/playlistItems';
            //console.log("Requesting url ", url);
            var promise = this.ajax(url, 'GET', {
                data: query
            });
            //console.log("Request", promise);
            return promise;
        },
        handleResponse: function handleResponse(status, headers, payload) {
            this._super.apply(this, arguments);
            //console.log("handleResponse", status, headers, payload);
            if (payload.error !== undefined) {
                return new _emberData['default'].InvalidError(payload.error);
            }
            return payload;
        }
    });
});
define('resume/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'resume/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _resumeConfigEnvironment) {
    var App;
    _ember['default'].MODEL_FACTORY_INJECTIONS = true;
    App = _ember['default'].Application.extend(_ember['default'].Evented, {
        modulePrefix: _resumeConfigEnvironment['default'].modulePrefix,
        podModulePrefix: _resumeConfigEnvironment['default'].podModulePrefix,
        Resolver: _emberResolver['default'],
        initializer: _ember['default'].Application.initializer({
            name: 'app-initializer',
            initialize: function initialize() /*application*/{
                console.log("initializing application");
                //not yet used.  Retained for example purposes.
            }
        })
    });

    (0, _emberLoadInitializers['default'])(App, _resumeConfigEnvironment['default'].modulePrefix);
    exports['default'] = App;
});
define('resume/breakpoints', ['exports'], function (exports) {
  exports['default'] = {
    mobile: '(max-width: 768px)',
    tablet: '(min-width: 769px) and (max-width: 992px)',
    desktop: '(min-width: 993px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
});
define('resume/components/anim-header', ['exports', 'ember', 'resume/mixins/in-viewport'], function (exports, _ember, _resumeMixinsInViewport) {
    exports['default'] = _ember['default'].Component.extend(_resumeMixinsInViewport['default'], {
        layoutName: 'header',
        tagName: 'header',
        classNames: ['anim-header'],
        classNameBindings: ['enteredViewport:expanded', 'exitedViewport:collapsed'],
        // }.property('controller.resume.positions')
        exitedViewportClass: _ember['default'].computed('enteredViewport', function () {
            console.log("enteredViewport value", this.get("enteredViewport"));
            return this.get('enteredViewport') ? 'visible' : 'hidden';
        }),
        expanded: false,
        expandedNavigation: _ember['default'].computed('expanded', function () {
            return this.get('expanded') ? 'visible' : '';
        }),
        expandOnHover: function expandOnHover() {
            //console.log("expandOnHover");
            this.set('expanded', true);
        },
        collapseOnExit: function collapseOnExit() {
            //console.log("collapseOnExit");
            this.set('expanded', false);
        },
        didInsertElement: function didInsertElement() {
            console.log('didInsertElement');
            this._bindScroll();
            this._super();
        },
        willDestroyElement: function willDestroyElement() {
            console.log('willDestroyElement');
            this._unbindScroll();
            this._super();
        },
        actions: {
            navTo: function navTo(route) {
                this.toggleProperty('expanded');
                console.log("Navto.  Route", route);
                this.sendAction('action', route);
            },
            toggleBody: function toggleBody() {
                this.toggleProperty('expanded');
            }
        },
        mouseEnter: function mouseEnter() /*event*/{
            _ember['default'].run.debounce(this, 'expandOnHover', 100);
        },
        focusIn: function focusIn() {
            _ember['default'].run.debounce(this, 'expandOnHover', 100);
        },
        mouseLeave: function mouseLeave() /*event*/{
            _ember['default'].run.debounce(this, 'collapseOnExit', 100);
        },
        focusOut: function focusOut() {
            _ember['default'].run.debounce(this, 'collapseOnExit', 100);
        }
        // },
        // viewportOptionsOverride: Ember.on('didInsertElement', function() {
        //     //see https://www.npmjs.com/package/ember-in-viewport
        //     Ember.setProperties(this, {
        //         viewportUseRAF: false,
        //         viewportSpy: false,
        //         viewportScrollSensitivity: 10,
        //         viewportRefreshRate: 150,
        //         viewportTolerance: {
        //             top: 500,
        //             bottom: 1000,
        //             left: 0,
        //             right: 0
        //         }
        //     });
        // })
    });
});
define('resume/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'resume/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _resumeConfigEnvironment) {

  var name = _resumeConfigEnvironment['default'].APP.name;
  var version = _resumeConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('resume/components/block-grid-item', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend(_ember['default'].Evented, {
        object: null,
        textValue: _ember['default'].computed('textParam', function () {
            var textParam = this.get('textParam');
            if (!textParam) {
                return "Text param not set in parent view";
            }
            return this.get('object').get(textParam);
        }),
        linkValue: _ember['default'].computed('linkParam', function () {
            var linkParam = this.get('linkParam');
            if (!linkParam) {
                return "Text param not set in parent view";
            }
            return this.get('object').get(linkParam);
        }),
        backgroundImageURL: _ember['default'].computed('object', function () {
            var url = this.get('object').get('projectThumbnails').filterBy('thumbnailType', 'default').get(0).get('url');
            return url;
            //return new Ember.Handlebars.SafeString("background-image: url(" + url +") no-repeat top left");
        }),
        backgroundImageWidth: _ember['default'].computed("object", function () {
            return this.get('object').get('projectThumbnails').filterBy('thumbnailType', 'default').get(0).get('width');
        }),
        backgroundImageHeight: _ember['default'].computed("object", function () {
            return this.get('object').get('projectThumbnails').filterBy('thumbnailType', 'default').get(0).get('height');
        }),
        isActive: _ember['default'].computed('parentView.activeObject', function () {
            var activeObjectId = this.get('parentView').get('activeObject');
            if (activeObjectId === false) {
                return '';
            }
            console.log("active object", activeObjectId);
            return this.get('object').get('id') === activeObjectId ? 'activeObject' : '';
        }),
        actions: {
            click: function click() {
                console.log("Click action registered from block grid item.");
                this.sendAction('action', this.get('object'));
            }
        }
    });
});
define('resume/components/block-grid', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        notifier: null,
        activeObject: false,
        linkAction: null,
        textParam: null,
        linkParam: null,

        backgroundImageURL: function backgroundImageURL(o) {
            console.log("Retrieving background image for o", o);
            var url = o.get('projectThumbnails').filterBy('thumbnailType', 'default').get(0).get('url');
            return url;
            //return new Ember.Handlebars.SafeString("background-image: url(" + url +") no-repeat top left");
        },
        isDefaultThumbnail: function isDefaultThumbnail(thumbnail) {
            console.log("Thumbnail", thumbnail);
            return thumbnail.get('thumbnailType') === 'default';
        },
        backgroundImageWidth: function backgroundImageWidth(o) {
            return o.get('projectThumbnails').filterBy('thumbnailType', 'default').get(0).get('width');
        },
        backgroundImageHeight: function backgroundImageHeight(o) {
            return o.get('projectThumbnails').filterBy('thumbnailType', 'default').get(0).get('height');
        },
        isActive: function isActive(o) {
            var activeObject = this.get('activeObject');
            if (activeObjectId === false) {
                return '';
            }
            console.log("active object", activeObjectId);
            return o.get('id') === activeObject.id ? 'activeObject' : '';
        },
        actions: {
            click: function click(o) {
                this.set('activeObject', o);
                console.log("sending object", o);
                this.sendAction('action', o);
            }
        }
    });
});
define('resume/components/fa-icon', ['exports', 'ember-cli-font-awesome/components/fa-icon'], function (exports, _emberCliFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('resume/components/fa-list-icon', ['exports', 'ember-cli-font-awesome/components/fa-list-icon'], function (exports, _emberCliFontAwesomeComponentsFaListIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaListIcon['default'];
    }
  });
});
define('resume/components/fa-list', ['exports', 'ember-cli-font-awesome/components/fa-list'], function (exports, _emberCliFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaList['default'];
    }
  });
});
define('resume/components/fa-stack', ['exports', 'ember-cli-font-awesome/components/fa-stack'], function (exports, _emberCliFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('resume/components/loading-slider', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['loading-slider'],
    classNameBindings: 'expanding',

    initialize: _ember['default'].on('didReceiveAttrs', function () {
      this.set('isLoading', this.getAttr('isLoading'));
      this.set('duration', this.getAttr('duration'));
      this.set('expanding', this.getAttr('expanding'));
      this.set('speed', this.getAttr('speed'));
      this.set('color', this.getAttr('color'));

      this.manage();
    }),

    manage: function manage() {
      if (this.get('isLoading')) {
        if (this.get('expanding')) {
          this.expandingAnimate.call(this);
        } else {
          this.animate.call(this);
        }
      } else {
        this.set('isLoaded', true);
      }
    },

    animate: function animate() {
      this.set('isLoaded', false);
      var self = this,
          elapsedTime = 0,
          inner = $('<span>'),
          outer = this.$(),
          duration = this.getWithDefault('duration', 300),
          innerWidth = 0,
          outerWidth = this.$().width(),
          stepWidth = Math.round(outerWidth / 50),
          color = this.get('color');

      outer.append(inner);
      if (color) {
        inner.css('background-color', color);
      }

      var interval = window.setInterval(function () {
        elapsedTime = elapsedTime + 10;
        inner.width(innerWidth = innerWidth + stepWidth);

        // slow the animation if we used more than 75% the estimated duration
        // or 66% of the animation width
        if (elapsedTime > duration * 0.75 || innerWidth > outerWidth * 0.66) {
          // don't stop the animation completely
          if (stepWidth > 1) {
            stepWidth = stepWidth * 0.97;
          }
        }

        if (innerWidth > outerWidth) {
          _ember['default'].run.later(function () {
            outer.empty();
            window.clearInterval(interval);
          }, 50);
        }

        // the activity has finished
        if (self.get('isLoaded')) {
          // start with a sizable pixel step
          if (stepWidth < 10) {
            stepWidth = 10;
          }
          // accelerate to completion
          stepWidth = stepWidth + stepWidth;
        }
      }, 10);
    },

    expandingAnimate: function expandingAnimate() {
      var self = this,
          outer = this.$(),
          speed = this.getWithDefault('speed', 1000),
          colorQueue = this.get('color');

      if ('object' === typeof colorQueue) {
        (function updateFn() {
          var color = colorQueue.shift();
          colorQueue.push(color);
          self.expandItem.call(self, color);
          if (!self.get('isLoading')) {
            outer.empty();
          } else {
            window.setTimeout(updateFn, speed);
          }
        })();
      } else {
        this.expandItem.call(this, colorQueue, true);
      }
    },

    expandItem: function expandItem(color, cleanUp) {
      var self = this,
          inner = $('<span>').css({ 'background-color': color }),
          outer = this.$(),
          innerWidth = 0,
          outerWidth = outer.width(),
          stepWidth = Math.round(outerWidth / 50);

      outer.append(inner);

      var interval = window.setInterval(function () {
        var step = innerWidth = innerWidth + stepWidth;
        if (innerWidth > outerWidth) {
          window.clearInterval(interval);
          if (cleanUp) {
            outer.empty();
          }
        }
        inner.css({
          'margin-left': '-' + step / 2 + 'px',
          'width': step
        });
      }, 10);
    },

    didInsertElement: function didInsertElement() {
      this.$().html('<span>');

      var color = this.get('color');
      if (color) {
        this.$('span').css('background-color', color);
      }
    }
  });
});
define('resume/components/main-sidebar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('resume/components/three-square', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('resume/components/toggle-drawer', ['exports', 'ember'], function (exports, _ember) {

    //NOTE: triggers safestring warning due to binding of style attribute to control width.  @see https://github.com/emberjs/ember.js/issues/10870
    exports['default'] = _ember['default'].Component.extend({
        drawerOpen: false,
        drawerPosition: "left",
        drawerToggleProperty: null,
        togglePropertyChanged: _ember['default'].observer('drawerToggleProperty', function () {
            if (this.get('toggleProperty') === null) {
                return;
            }
            console.log("toggleProperty changed to ", this.get('toggleProperty'));
            //something was chosen by the parent controller - close the drawer.
            this.set('drawerOpen', false);
        }),
        drawerPositionClass: _ember['default'].computed('drawerPosition', function () {
            return this.get('drawerPosition') === 'right' ? 'toggle-drawer-right' : 'toggle-drawer-left';
        }),
        drawerWidth: '300px', //default value, user should override
        currentWidth: _ember['default'].computed('drawerOpen', 'drawerWidth', function () {
            return this.get('drawerOpen') ? _ember['default'].String.htmlSafe('width:' + this.get('drawerWidth') + ';') : _ember['default'].String.htmlSafe('width:0;');
        }),
        togglePadding: _ember['default'].computed('drawerOpen', 'drawerWidth', function () {
            return this.get('drawerOpen') ? _ember['default'].String.htmlSafe('padding-left:' + this.get('drawerWidth') + ';') : _ember['default'].String.htmlSafe('padding-left:0');
        }),
        classNames: ['toggle-drawer'],
        classNameBindings: ['drawerActiveClass', 'drawerPositionClass'],
        attributeBindings: ['currentWidth:style'],
        drawerActiveClass: _ember['default'].computed("drawerOpen", function () {
            return this.get('drawerOpen') ? 'open' : 'closed';
        }),
        actions: {
            drawerToggle: function drawerToggle() {
                this.toggleProperty('drawerOpen');
            }
        }
    });
});
define('resume/components/top-navbar', ['exports', 'ember', 'resume/mixins/in-viewport'], function (exports, _ember, _resumeMixinsInViewport) {
    exports['default'] = _ember['default'].Controller.extend(_resumeMixinsInViewport['default'], {
        // positions: function() {
        //  return this.store.find("position");
        // }.property('controller.resume.positions')
        exitedViewportClass: _ember['default'].computed('enteredViewport', function () {
            console.log("enteredViewport value", this.get("enteredViewport"));
            return this.get('enteredViewport') ? 'visible' : 'hidden';
        }),
        showDesktopNav: false,
        showJsCenteredNavigationMenu: _ember['default'].computed('showDesktopNav', function () {
            return this.get('showDesktopNav') ? 'show' : '';
        }),
        expandOnHover: _ember['default'].computed('exitedViewport', 'showDesktopNav', function () {
            if (!this.get('showDesktopNav')) {
                return '';
            }
            return '';
        }),
        didInsertElement: function didInsertElement() {
            console.log('didInsertElement');
            this._bindScroll();
            this._super();
        },
        willDestroyElement: function willDestroyElement() {
            console.log('willDestroyElement');
            this._unbindScroll();
            this._super();
        },
        // actions: {
        //     navTo(route){
        //         this.toggleProperty('showDesktopNav');
        //         this.transitionToRoute(route);
        //     },
        //     toggleBody() {
        //         this.toggleProperty('showDesktopNav');
        //     }
        // },
        mouseMove: function mouseMove() /*event*/{
            console.log('mousemove');
        }
    });
});
define('resume/components/x-option', ['exports', 'emberx-select/components/x-option'], function (exports, _emberxSelectComponentsXOption) {
  exports['default'] = _emberxSelectComponentsXOption['default'];
});
define('resume/components/x-select', ['exports', 'emberx-select/components/x-select'], function (exports, _emberxSelectComponentsXSelect) {
  exports['default'] = _emberxSelectComponentsXSelect['default'];
});
define('resume/components/youtube-iframeplayer', ['exports', 'ember', 'ember-resize/mixins/resize-aware'], function (exports, _ember, _emberResizeMixinsResizeAware) {
    /*
    See https://developers.google.com/youtube/iframe_api_reference for
    youtube iframe api
    */
    exports['default'] = _ember['default'].Component.extend(_emberResizeMixinsResizeAware['default'], {
        video: null,
        youtubeId: _ember['default'].computed('video', function () {
            if (!this.get('hasActiveVideo')) {
                return '';
            }
            return this.get('video').get('videoId');
        }),
        //playerInitialized: false,
        youtubePlaylistId: false,
        youtubeError: false,
        //player: null,
        videoTitle: _ember['default'].computed('video', function () {
            if (!this.get('hasActiveVideo')) {
                return 'Project Videos';
            }
            //TODO: this breaks encapsulation.  Need to come up with a better approach.
            return this.get('video').get('title');
        }),
        videoDescription: _ember['default'].computed("video", function () {
            if (!this.get('hasActiveVideo')) {
                return 'Choose a video from above';
            }
            //TODO: this breaks encapsulation.  Need to come up with a better approach.
            return this.get('video').get('description');
        }),
        playerWidth: '640px',
        playerHeight: '390px',
        hasActiveVideo: _ember['default'].computed('video', function () {
            return this.get('video') !== null;
        }),
        // init: function(){
        //     //this.EventBus.subscribe('onYouTubeIframeAPIReady', this, 'initializeYoutubeVideo');
        //     // this.EventBus.subscribe('projectSelect', this, 'updateYoutubeVideo');
        // },
        _resizeHandler: function _resizeHandler() {
            _ember['default'].run.debounce(this, function () {
                console.log("Running resize handler.  This:", this);
                var videoRatio = 390 / 640;
                var containerWidth = Math.min(this.$().innerWidth(), 640);
                var containerHeight = parseInt(containerWidth * videoRatio);
                this.set('playerWidth', containerWidth + 'px');
                this.set('playerHeight', containerHeight + 'px');
            }, 150);
        },
        // didResize(width, height, evt) {
        //     console.log(`Resized! ${width}x${height}`);
        // },
        debouncedDidResize: function debouncedDidResize(width, height /*, evt*/) {
            console.log('Debounced Resize! ' + width + 'x' + height);
            this._resizeHandler();
        },
        didRender: function didRender() {
            this._super.apply(this, arguments);
            this._resizeHandler();
        },
        // willDestroyElement: function() {
        //     //this.get('EventBus').unsubscribe('projectSelect');
        //     this._super.apply(this, arguments);
        // },
        youtubeSrc: _ember['default'].computed('hasActiveVideo', function () {
            if (!this.get('hasActiveVideo')) {
                return 'http://www.youtube.com/embed?listType=playlist&list=' + this.get('youtubePlaylistId') + '&autoplay=0';
            }
            return 'http://www.youtube.com/embed/' + this.get('youtubeId') + '?autoplay=1';
        }),
        // initializeYoutubeVideo: function() {
        //     console.log("initializing youtube player");
        //     this.set('playerInitialized', true);
        //     this.set('player', new YouTubePlayer('youtube-iframeplayer', {
        //         height: '390',
        //         width: '640',
        //     }));
        //     if(this.get('youtubePlaylistId') !== null){
        //         this.get('player').cuePlaylist({
        //             listType: 'playlist',
        //             list: this.get('youtubePlaylistId')
        //         });
        //     }
        //     this.set('playerInitialized', true);
        // },
        /**
        This is ugly.  I'm using a computed property for the side effect
        of initializing the video.  The problem is the video changes in a
        data-down manner, and I need to invoke a function on that change, but
        I'm not yet sure how.  There's got to be a better way.
        */
        // runPlayer: Ember.computed('video', function(){
        //     if(this.get('video') === null){
        //         return;
        //     }
        //     if(this.get('playerInitialized') === false){
        //         this.initializeYoutubeVideo();
        //     }
        //     this.updateYoutubeVideo();
        //     return '';
        // }),
        // updateYoutubeVideo: function() {
        //     console.log("Hello from updateYoutubeVideo on youtube iframe player.");
        //     this.get('player').stopVideo();
        //     if(this.get('video') === null){
        //         this.set('youtube_error', "Error: no video was chosen");
        //         return;
        //     }
        //     this.set('youtube_id', this.get('video').get('videoId'));
        //     this.set('playerTitle', this.get('video').get('title'));
        //     this.set('playerDescription', this.get('video').get('description'));
        //     this.get('player').loadVideoById(this.get('video').get('videoId'));
        // },
        /*    actions: {
        initializeYoutubeVideo: function(){
        console.log("Hello from initializeYoutubeVideo action on youtube iframe player.");
        }
        },*/
        events: {
            error: function error(reason) {
                console.log("Url not available", reason);
            }
        }
    });
});
define("resume/controllers/application", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Controller.extend({
        breadCrumb: "Home",
        actions: {
            navTo: function navTo(route) {
                console.log("Applicaiton controller navto. Route", route);
                this.transitionToRoute(route);
            }
        }
    });
});
define('resume/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('resume/controllers/blog', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        activePost: null,
        actions: {
            selectPost: function selectPost(postId) {
                console.log("PostId", postId);
                this.set('activePost', postId);
                this.transitionToRoute('blog.post', postId);
            }
        }
    });
});
define('resume/controllers/clock', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		init: function init() {
			this.updateTime();
		},
		updateTime: function updateTime() {
			var _this = this;

			// Update the time every second.
			_ember['default'].run.later(function () {
				_this.set('localTime', new Date().toLocaleTimeString());
				_this.updateTime();
			}, 1000);
		},
		localTime: new Date().toLocaleTimeString()
	});
});
define('resume/controllers/contact', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        formReady: true,
        submitButtonDisabled: _ember['default'].computed('formReady', function () {
            if (this.get('formReady') !== true) {
                return true;
            }
            return false;
        }),
        actions: {
            submit: function submit() {
                console.log("submit.  This", this.model);
            }
        }
    });
});
define('resume/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('resume/controllers/projects', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        activeObject: null,

        isActive: _ember['default'].computed('activeObject', function () {
            var activeObject = this.get('activeObject');
            if (!activeObject) {
                return false;
            }
            return true;
        }),
        active: _ember['default'].computed('isActive', function () {
            return this.get('isActive') ? 'active' : '';
        }),
        didUpdate: function didUpdate() {
            console.log("project didupdate");
        },
        actions: {
            updateYoutubeVideo: function updateYoutubeVideo(o) {
                //console.log("Hello from updateYoutubeVideo on projects controller.  Param 1:", o);
                this.set("activeObject", o);
                this.transitionToRoute('projects.id', o.id);
            }
        }
    });
});
define("resume/controllers/resume/education", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		breadCrumb: "Education"
	});
});
define("resume/controllers/resume/positions", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].ArrayController.extend({
		breadCrumb: "Positions"
	});
});
define("resume/controllers/resume/summary", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		breadCrumb: "Positions"
	});
});
define("resume/controllers/resume", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		breadCrumb: "Resume"
	});
});
define('resume/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/code-highlighter', ['exports', 'ember'], function (exports, _ember) {
    exports.codeHighlighter = codeHighlighter;

    function replaceCodeStrings(match, attributes, code) {
        console.log("Attributes", attributes);
        var lang = 'bash'; //list of supported languages: http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html
        if (attributes.match('jscript')) {
            lang = 'javascript';
        }
        code = $('<textarea />').html(code).text().trim();
        //console.log("Highlighting code", code);
        //TODO: add support for other languages once I see the Wordpress equivalents
        var result = window.hljs.highlight(lang, code);
        result = '<span class="line">' + result.value.replace(/\n/g, '</span>\n<span class="line">') + '</span>';
        //result = '<span>'+result.value.replace("\n", '</span>\n<span>')+'</span>';
        //console.log("Highlighting result", result);
        return '<code class="highlit">' + result + '</code>';
    }

    function codeHighlighter(params /*, hash*/) {
        "use strict";
        //console.log("code-highlighter invoked");
        if (params.length === 0) {
            return params;
        }
        //console.log("Value to be highlit", value);
        params[0] = params[0].replace(/\<pre([^\>]+)\>([^\<]+)\<\/pre\>/g, replaceCodeStrings);

        //console.log("Result", result);
        return params;
    }

    exports['default'] = _ember['default'].Helper.helper(codeHighlighter);

    /*
    export function markdownToHtml(value /*, options ) {
        "use strict";
        if (value.length === 0) {
            return "<p>No value</p>";
        }
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            // highlight: function(code) {
            //     hljs.highlightAuto(code).value;
            // },
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });
        return new Ember.Handlebars.SafeString(marked(value[0]));
    }
    export default Ember.HTMLBars.makeBoundHelper(markdownToHtml);
     */
});
define('resume/helpers/date-formatter', ['exports', 'ember', 'npm:moment'], function (exports, _ember, _npmMoment) {
	exports.dateFormatter = dateFormatter;

	function dateFormatter(date) {
		//console.log("date", date);
		if (Array.isArray(date)) {
			date = date[0];
		}
		return (0, _npmMoment['default'])(date.toLocaleDateString()).format('MMMM Do YYYY');
	}

	exports['default'] = _ember['default'].HTMLBars.makeBoundHelper(dateFormatter);
});
define('resume/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/line-drawer', ['exports', 'ember'], function (exports, _ember) {
  exports.lineDrawer = lineDrawer;

  function lineDrawer(params /*, hash*/) {
    return params;
  }

  exports['default'] = _ember['default'].HTMLBars.makeBoundHelper(lineDrawer);
});
define('resume/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/markdown-to-html', ['exports', 'ember', 'npm:marked'], function (exports, _ember, _npmMarked) {
    exports.markdownToHtml = markdownToHtml;

    function markdownToHtml(value /*, options*/) {
        "use strict";
        if (value.length === 0) {
            return "<p>No value</p>";
        }
        _npmMarked['default'].setOptions({
            renderer: new _npmMarked['default'].Renderer(),
            gfm: true,
            // highlight: function(code) {
            //     hljs.highlightAuto(code).value;
            // },
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });
        return new _ember['default'].Handlebars.SafeString((0, _npmMarked['default'])(value[0]));
    }

    exports['default'] = _ember['default'].HTMLBars.makeBoundHelper(markdownToHtml);
});
define('resume/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('resume/helpers/param-value', ['exports', 'ember'], function (exports, _ember) {
    exports.paramValue = paramValue;

    function paramValue(params /*, hash*/) {
        if (params.length >= 2) {
            console.error("Invalid number of arguments supplied to paramValue helper");
            return;
        }
        if (typeof params[0] !== 'string') {
            console.error("Invalid first argument supplied to paramValue helper (should be string key)");
        }
        if (typeof params[1] !== 'object') {
            console.error("Invalid second argument supplied to paramValue helper (should be data object)");
        }
        return params[1][params[0]];
    }

    exports['default'] = _ember['default'].Helper.helper(paramValue);
});
define('resume/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('resume/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'resume/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _resumeConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_resumeConfigEnvironment['default'].APP.name, _resumeConfigEnvironment['default'].APP.version)
  };
});
define('resume/initializers/event-bus', ['exports', 'ember', 'resume/services/event-bus'], function (exports, _ember, _resumeServicesEventBus) {
  exports.initialize = initialize;

  function initialize(container, application) {
    _ember['default'].debug('Running initializer ' + this.name + '!');
    var singletonBus = _resumeServicesEventBus['default'].create();

    application.register('event-bus:current', singletonBus, {
      instantiate: false
    });

    application.inject('component', 'EventBus', 'event-bus:current');
    application.inject('controller', 'EventBus', 'event-bus:current');
    application.inject('route', 'EventBus', 'event-bus:current');
  }

  exports['default'] = {
    name: 'event-bus',
    initialize: initialize
  };
});
define('resume/initializers/export-application-global', ['exports', 'ember', 'resume/config/environment'], function (exports, _ember, _resumeConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_resumeConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _resumeConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_resumeConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('resume/initializers/resize', ['exports', 'ember-resize/services/resize', 'resume/config/environment'], function (exports, _emberResizeServicesResize, _resumeConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    var resizeServiceDefaults = _resumeConfigEnvironment['default'].resizeServiceDefaults;
    var injectionFactories = resizeServiceDefaults.injectionFactories;

    application.register('config:resize-service', resizeServiceDefaults, { instantiate: false });
    application.register('service:resize', _emberResizeServicesResize['default']);
    application.inject('service:resize', 'resizeServiceDefaults', 'config:resize-service');

    injectionFactories.forEach(function (factory) {
      application.inject(factory, 'resizeService', 'service:resize');
    });
  }

  exports['default'] = {
    name: 'resize',
    initialize: initialize
  };
});
define('resume/initializers/responsive', ['exports', 'ember-responsive/initializers/responsive'], function (exports, _emberResponsiveInitializersResponsive) {
  exports['default'] = _emberResponsiveInitializersResponsive['default'];
});
define('resume/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('resume/initializers/viewport-config', ['exports', 'ember', 'resume/config/environment'], function (exports, _ember, _resumeConfigEnvironment) {
  exports.initialize = initialize;

  var defaultConfig = {
    viewportSpy: false,
    viewportScrollSensitivity: 1,
    viewportRefreshRate: 100,
    viewportListeners: [{ context: window, event: 'scroll.scrollable' }, { context: window, event: 'resize.resizable' }, { context: document, event: 'touchmove.scrollable' }],
    viewportTolerance: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  };

  var merge = _ember['default'].merge;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var _config$viewportConfig = _resumeConfigEnvironment['default'].viewportConfig;
    var viewportConfig = _config$viewportConfig === undefined ? {} : _config$viewportConfig;

    var mergedConfig = merge(defaultConfig, viewportConfig);

    application.register('config:in-viewport', mergedConfig, { instantiate: false });
  }

  exports['default'] = {
    name: 'viewport-config',
    initialize: initialize
  };
});
define('resume/lib/threejs/line-rain', ['exports', 'ember', 'resume/lib/threejs/setup'], function (exports, _ember, _resumeLibThreejsSetup) {
	exports['default'] = drawLineRain;

	var line = null;
	var squiggles = [];
	function render() {
		if (!_resumeLibThreejsSetup.isInitialized()) {
			console.error("Three scene not _initialized.");
			return false;
		}
		requestAnimationFrame(render);

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = squiggles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var s = _step.value;

				s.drop;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator['return']) {
					_iterator['return']();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		_resumeLibThreejsSetup.redraw();
	}

	function drawSquiggle(point) {
		var squiggle = new Squiggle(point);
		_resumeLibThreejsSetup.getScene().add(squiggle.getGeometry());
	}

	function drawLineRain(target_canvas) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		if (!_resumeLibThreejsSetup.initialize(target_canvas, options)) {
			console.error("Could not initialize");
			return false;
		}
		var material = new THREE.LineBasicMaterial({
			color: 0x333333
		});

		var geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(-10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0));

		line = new THREE.Line(geometry, material);
		//threejs.getScene().add(line);
		//add stuff using threejs.getScene().add(object);
		render();
	}
});
/* global THREE */
define('resume/lib/threejs/planewall', ['exports', 'ember', 'resume/lib/threejs/setup'], function (exports, _ember, _resumeLibThreejsSetup) {
	exports['default'] = drawPlaneWall;

	var WallOfPlanes = {},
	    pivot,
	    planesContainer,
	    planes = [],
	    numOfPlanesX = 30,
	    numOfPlanesY = 30,
	    planeWidth = 100,
	    planeHeight = 100,
	    offset = 5,
	    mouseX = 0,
	    mouseY = 0;

	/**
 callback function that stores mouse coordinates to update the wall pivot
 **/
	function _onSceneMouseMove(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	/**
 invoked after setup completion.  performs animation loop
 */
	function _render() {
		if (!_resumeLibThreejsSetup.isInitialized()) {
			console.error("Three scene not _initialized.");
			return false;
		}
		requestAnimationFrame(_render);

		var dx = mouseX - window.innerWidth * 0.5;
		var dy = mouseY - window.innerHeight * 0.5;

		pivot.rotation.x = -dy / 1000;
		pivot.rotation.y = -dx / 1000;

		_resumeLibThreejsSetup.redraw();
	}

	/**
 draws a multicolored tiled wall that moves with the mouse cursor
 **/

	function drawPlaneWall(target_canvas) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		if (!_resumeLibThreejsSetup.initialize(target_canvas, options)) {
			console.error("Could not initialize");
			return false;
		}
		pivot = new THREE.Object3D();
		_resumeLibThreejsSetup.getScene().add(pivot);

		planesContainer = new THREE.Object3D();
		pivot.add(planesContainer);

		for (var x = 0; x < numOfPlanesX; x++) {
			for (var y = 0; y < numOfPlanesY; y++) {
				var plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(planeWidth, planeHeight, 1, 1), new THREE.MeshBasicMaterial({
					color: Math.random() * 0xFFFFFF
				}));

				plane.position.x = -(x * (planeWidth + offset));
				plane.position.y = -(y * (planeHeight + offset));
				plane.doubleSided = true;

				planes.push(plane);
				planesContainer.add(plane);
			}
		}

		planesContainer.position.x = numOfPlanesX * planeWidth * 0.5;
		planesContainer.position.y = numOfPlanesY * planeHeight * 0.5;
		_ember['default'].$('#threeScene').on("mousemove", _onSceneMouseMove);
		_render();
	}
});
/* global THREE */
define("resume/lib/threejs/setup", ["exports", "ember"], function (exports, _ember) {
	exports.getRenderer = getRenderer;
	exports.getScene = getScene;
	exports.isInitialized = isInitialized;
	exports.redraw = redraw;
	exports.initialize = initialize;

	var _canvas,
	    _renderer,
	    _scene,
	    _camera = false;
	var _initialized = false;

	/**
 utility function to redraw the canvas
 */
	function _onResize(e) {
		_renderer.setSize(window.innerWidth, window.innerHeight);
	}

	/**
 returns the active renderer
 */

	function getRenderer() {
		if (!_initialized) {
			console.error("Three scene not _initialized.");
			return false;
		}
		return _renderer;
	}

	/**
  returns the active scene object 
  */

	function getScene() {
		if (!_initialized) {
			console.error("Three scene not _initialized.");
			return false;
		}
		return _scene;
	}

	/**
 returns whether three has found the passed canvas and initialized to it.
 */

	function isInitialized() {
		return _initialized;
	}

	/**
 redraws the scene using the stored scene and camera.  Call this at the end of the render loop
 */

	function redraw() {
		_renderer.render(_scene, _camera);
	}

	/**
 called initially, passing a valid html canvas element to be drawn to.
 **/

	function initialize() {
		var target_canvas = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		if (_initialized && _canvas === target_canvas) {
			return true;
		}
		if (target_canvas === false) {
			//todo: add support for _canvas insertion
			console.error("canvas was not set.");
			return false;
		}
		_canvas = target_canvas;
		_scene = new THREE.Scene();
		//TODO: add options
		//camera_distance = (undefined === options.camera_distance) ?: 1000;
		var camera_z = undefined !== options.camera_z ? options.camera_z : 500;
		_camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
		_camera.position.z = camera_z;
		_scene.add(_camera);
		_renderer = new THREE.WebGLRenderer({
			antialias: true,
			canvas: target_canvas //gets the actual html element
		});
		_renderer.setSize(window.innerWidth, window.innerHeight);
		_renderer.setClearColor(new THREE.Color("rgb(255,255,255)"), 1.0);
		_renderer.clear();
		_ember["default"].$(_renderer.domElement).attr('id', 'threeScene');
		_ember["default"].$(window).resize(_onResize);
		console.log("Three initialized");
		_initialized = true;
		return true;
	}
});
/* global THREE */
define('resume/lib/threejs/squiggle', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = Squiggle;

	function Squiggle( /*Vector3*/start) {
		var geometry = new THREE.Geometry();
		return {
			addPoint: function addPoint( /*Vector3*/point) {
				this.geometry.vertices.push(new THREE.Vector3(point.x, point.y, 0));
			},
			drop: function drop() {
				//this.addPoint
			},
			getGeometry: function getGeometry() {
				return this.geometry;
			}
		};
	}
});
/* global THREE */
define('resume/lib/threejs/template', ['exports', 'ember', 'resume/lib/threejs/setup'], function (exports, _ember, _resumeLibThreejsSetup) {
	exports['default'] = drawLineRain;

	function render() {
		if (!_resumeLibThreejsSetup.isInitialized()) {
			console.error("Three scene not _initialized.");
			return false;
		}
		requestAnimationFrame(render);

		//do stuff here
		_resumeLibThreejsSetup.redraw();
	}

	function drawLineRain(target_canvas) {
		if (!_resumeLibThreejsSetup.initialize(target_canvas)) {
			console.error("Could not initialize");
			return false;
		}

		//add stuff using threejs.getScene().add(object);
		render();
	}
});
/* A template for quick reference on using this modular implementation of the threejs library. */
/* global THREE */
define('resume/mixins/in-viewport', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    scrollTimeout: 100,
    boundingClientRect: 0,
    windowHeight: 0,
    windowWidth: 0,

    enteredViewport: _ember['default'].computed('boundingClientRect', 'windowHeight', 'windowWidth', function () {
      var rect, windowHeight, windowWidth;
      rect = this.get('boundingClientRect');
      windowHeight = this.get('windowHeight');
      windowWidth = this.get('windowWidth');
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= windowHeight && rect.right <= windowWidth;
    }),

    exitedViewport: _ember['default'].computed.not('enteredViewport'),

    _updateBoundingClientRect: function _updateBoundingClientRect() {
      var el;
      el = this.$()[0];
      this.set('boundingClientRect', el.getBoundingClientRect());
    },

    _setup: (function () {
      return _ember['default'].run.scheduleOnce('afterRender', this, function () {
        this._updateBoundingClientRect();
        this.set('windowHeight', window.innerHeight || document.documentElement.clientHeight);
        this.set('windowWidth', window.innerWidth || document.documentElement.clientWidth);
      });
    }).on('didInsertElement'),

    _scrollHandler: function _scrollHandler() {
      return _ember['default'].run.debounce(this, '_updateBoundingClientRect', this.get('scrollTimeout'));
    },

    _bindScroll: (function () {
      var scrollHandler;
      scrollHandler = this._scrollHandler.bind(this);
      _ember['default'].$(document).on('touchmove.scrollable', scrollHandler);
      _ember['default'].$(window).on('scroll.scrollable', scrollHandler);
    }).on('didInsertElement'),

    _unbindScroll: (function () {
      _ember['default'].$(window).off('.scrollable');
      _ember['default'].$(document).off('.scrollable');
    }).on('willDestroyElement')
  });
});
define("resume/mixins/lazy-loader", ["exports", "ember"], function (exports, _ember) {

  var LazyLoaderMixin = _ember["default"].Mixin.create({
    lazyLoad: function lazyLoad(url) {
      if (!LazyLoaderMixin.loaded[scriptName]) {
        return $.getScript(scriptName).then(function () {
          // getScript is in jQuery
          console.log("Script", url, "retrieved");
          LazyLoaderMixin.loaded[url] = true;
        });
      }
    }
  });

  LazyLoaderMixin.loaded = [];

  exports["default"] = LazyLoaderMixin;
});
define('resume/mixins/loading-slider', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    actions: {
      loading: function loading() {
        var controller = this.controllerFor('application');
        controller.set('loading', true);
        if (this.router) {
          this.router.one('didTransition', function () {
            controller.set('loading', false);
          });
        }
      },
      finished: function finished() {
        this.controllerFor('application').set('loading', false);
      }
    }
  });
});
define('resume/mixins/resize-aware', ['exports', 'ember-resize/mixins/resize-aware'], function (exports, _emberResizeMixinsResizeAware) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberResizeMixinsResizeAware['default'];
    }
  });
});
define("resume/models/blog-post", ["exports", "ember-data"], function (exports, _emberData) {

    /**
     * Model for the results of the serialized REST feed provided by
     * wordpress.com results.
     *
     */
    exports["default"] = _emberData["default"].Model.extend({
        title: _emberData["default"].attr("string"),
        URL: _emberData["default"].attr("string"),
        status: _emberData["default"].attr('string'),
        date: _emberData["default"].attr("date"),
        excerpt: _emberData["default"].attr("string"),
        content: _emberData["default"].attr("string")
    });
});
define("resume/models/blogger-blog-post", ["exports", "ember-data"], function (exports, _emberData) {
    exports["default"] = _emberData["default"].Model.extend({
        title: _emberData["default"].attr("string"),
        published: _emberData["default"].attr("date"),
        content: _emberData["default"].attr("string")
    });
});
/**
 * Note: currently unused, but kept for record of structure of blogger posts
 */
define('resume/models/contact', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        name: _emberData['default'].attr('string'),
        email: _emberData['default'].attr('string'),
        phone: _emberData['default'].attr('string'),
        website: _emberData['default'].attr('string'),
        comments: _emberData['default'].attr('string')
    });
});
define('resume/models/highlight', ['exports', 'ember-data'], function (exports, _emberData) {

	var Highlight = _emberData['default'].Model.extend({
		position_id: _emberData['default'].attr('number'),
		highlight: _emberData['default'].belongsTo('position')
	});

	/*Highlight.reopenClass({
 	//all caps defines a constant.
 	FIXTURES: [{
 		position_id: 1,
 		highlight: 'Sole developer responsible for building an installation of Drupal 7 intended to replace the existing nnlm.gov site.  Responsibilities included communicating with contractors to determine best practices and subcontract site components, regularly communicating with stakeholders to ensure business needs were met, finding or creating Drupal modules to satisfy those needs, and writing software that would manage multiple migrations of content in a controlled fashion into the Drupal environment.  Additionally created a web based migration map (AJAX, ExtJS) that would allow stakeholders to add tags and notes to their content prior to migration.'
 	}, {
 		position_id: 1,
 		highlight: 'Designed and constructed the “Rosters Application”, an in-house web application responsible for managing nnlm.gov staff member information, including positions and accounts.  Application almost entirely built in javascript (Primarily ExtJS), using AJAX, REST (JSON)'
 	}, {
 		position_id: 1,
 		highlight: 'Designed and constructed the [NN/LM Members Directory](http://nnlm.gov/members) , a server-based application written in PHP that provides information to the public about all 11 thousand medical libraries belonging to the National Network of Libraries of Medicine.'
 	}, {
 		position_id: 1,
 		highlight: 'Creation of a Google NN/LM maps application, allowing placement and fine tune geo-coding of medical library locations in the US.  This included tools that allow librarians of only moderate technical skill to fine-tune the location of the displayed library.'
 	}, {
 		position_id: 1,
 		highlight: 'Collaborated with contracted usability company AIR to create Section 508 disability accessible HTML templates, stylesheets, and Wordpress themes, including construction of page headers and footers used in every page request throughout the NN/LM domain.'
 	}, {
 		position_id: 1,
 		highlight: 'Provided technical consulting with individual regional librarian technical liaisons regarding software development and application support issues.'
 	}, {
 		position_id: 1,
 		highlight: 'Responsible for instigating and fully implementing version control (git) within and for all WebSTOC code, and transitioning all major projects into the same, increasing reliability and vastly decreasing incident recovery times.'
 	}, {
 		position_id: 2,
 		highlight: 'Developed databases per client spec in MySQL, and built forms in PHP, HTML, JavaScript for error checking entries and populating the databases.'
 	}, {
 		position_id: 2,
 		highlight: 'Evaluated and modified preexisting code to work in newer pages designed by our shop.'
 
 	}, {
 		position_id: 2,
 		highlight: 'Developed Flash Actionscript to add to client Flash pages to increase usability and interactivity.'
 
 	}, {
 		position_id: 3,
 		highlight: 'Work included troubleshooting faulty machines, assisting users with software difficulties, installing and basic configuring of networks, and PC upgrade/retrofit/teardown, primarily Windows 98/NT'
 
 	}, {
 		position_id: 3,
 		highlight: 'Clients included [Southwest Washington Medical Center](http://www.swmedicalcenter.com/) , [Columbia Sportswear](http://www.columbiasportswear.com/), [Providence Health](http://www.providence.org/oregon/default.htm) , and [US Bank](http://www.usbank.com/) among others.'
 
 	}, {
 		position_id: 4,
 		highlight: 'Worked in several highly dangerous environments, requiring high levels of cooperation, mindfulness, and attention to detail.'
 
 	}, {
 		position_id: 4,
 		highlight: 'Provided supervision for lower ranking personnel, including performance evaluation and training guidance.'
 
 	}, {
 		position_id: 4,
 		highlight: 'Established policy and procedure for the immunizations clinic of the [939th Air Mobility Wing](http://en.wikipedia.org/wiki/939th_Air_Refueling_Wing) . Provided policy and support for shot lines for 150 personnel average per duty day.'
 
 	}]
 });*/
	exports['default'] = Highlight;
});
define('resume/models/project-thumbnail', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        project: _emberData['default'].belongsTo('project'),
        thumbnailType: _emberData['default'].attr("string"),
        width: _emberData['default'].attr("number"),
        height: _emberData['default'].attr("number"),
        url: _emberData['default'].attr("string")
    });
});
/**
 * Model for the image thumbnails that come with youtube videos.
 */
define("resume/models/project", ["exports", "ember-data"], function (exports, _emberData) {
    /**
     * Model for the playlist results that come from youtube data feeds
     */
    exports["default"] = _emberData["default"].Model.extend({
        title: _emberData["default"].attr("string"),
        description: _emberData["default"].attr("string"),
        videoId: _emberData["default"].attr("string"),
        projectThumbnails: _emberData["default"].hasMany("project-thumbnail"),
        defaultThumbnail: Ember.computed('projectThumbnails', function () {
            var thumbnail = this.get('projectThumbnails').filterBy('thumbnailType', 'default').get(0);
            //console.log("Thumbnail", thumbnail);
            return thumbnail;
        })
    });
});
define('resume/router', ['exports', 'ember', 'resume/config/environment'], function (exports, _ember, _resumeConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _resumeConfigEnvironment['default'].locationType
  });

  exports['default'] = Router.map(function () {
    this.route("resume", function () {
      this.route('summary');
    });

    this.route('projects', function () {
      this.route("id", { path: ":project_id" });
    });
    this.route('contact');
    this.route('not-found', { path: '/*path' });
    this.route('blog', function () {
      this.route("post", { path: ':post_id' });
    });
    this.route('error');
    this.route('code');
  });
});
define('resume/routes/application', ['exports', 'ember', 'resume/mixins/loading-slider'], function (exports, _ember, _resumeMixinsLoadingSlider) {
    exports['default'] = _ember['default'].Route.extend(_resumeMixinsLoadingSlider['default'], {
        actions: {
            error: function error(_error, transition) {
                // handle the error
                if (_error) {
                    console.error(_error, transition);
                    this.transitionTo('error', _error, transition);
                }
                // retry the transition
                //transition.retry();
            }
        }
    });
});
define('resume/routes/blog/post', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            //console.log("model");
            return this.store.findRecord('blog-post', params.post_id);
        }
    });
});
define('resume/routes/blog', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            //console.log("model");
            return this.store.findAll('blog-post');
        },
        actions: {
            goToPost: function goToPost(param) {
                console.log("Go to post", param);
            }
        }
    });
});
define('resume/routes/clock', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/code', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/error', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/not-found', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    redirect: function redirect() {
      var url = this.router.location.formatURL('/not-found');
      if (window.location.pathname !== url) {
        this.transitionTo('/not-found');
      }
    }
  });
});
define('resume/routes/projects/id', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/projects', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            console.log("project findall");
            return this.store.findAll('project');
        },
        init: function init() {
            this._super.apply(this, arguments);
            /*            initializer: Ember.Application.initializer({
                  name: 'youtube-initializer',
                  initialize: function(application) {
                    Ember.debug('Running initializer '+this.name+'!');
                    window.onYouTubeIframeAPIReady = function() {
                        console.log("youtube code loaded");
                        //this.sendAction('onYouTubeIframeAPIReady');
                        application.EventBus.publish('onYouTubeIframeAPIReady');
                    }
                  }
                })*/
            console.log("projects init");
            //this.EventBus.subscribe('projectSelect', this, 'updateYoutubeVideo');
        },
        // setupController: function(controller/*, model*/) {
        //     this._super.apply(this, arguments);
        //     Ember.Instrumentation.subscribe("global.onYouTubeIframeAPIReady", {
        //         before: function(name, timestamp, payload) {
        //             console.log('Recieved ', name, ' at ' + timestamp + ' with payload: ', payload);
        //             controller.EventBus.publish('onYouTubeIframeAPIReady');
        //         },
        //         after: function(){}
        //     });
        // },
        willDestroy: function willDestroy() {
            //this.get('EventBus').unsubscribe('projectSelect');
            this._super.apply(this, arguments);
        },
        updateYoutubeVideo: function updateYoutubeVideo(param1) {
            console.log("Hello from updateYoutubeVideo on projects route.  Param 1:", param1, ", this", this);
            return true;
        },
        events: {
            error: function error(_error, transition) {
                // handle the error
                console.log(_error.message);
            }
        }
    });
});
define('resume/routes/resume/education', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/resume/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		renderTemplate: function renderTemplate() {
			this.render('resume.summary');
		}
	});
});
define('resume/routes/resume/positions/add', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('resume/routes/resume/positions', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.find('position');
		}
	});
});
define('resume/routes/resume/summary', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			console.log('routes/resume/summary.js');
			return this.store.find('summary');
		}
	});
});
define('resume/serializers/blog-post', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].JSONAPISerializer.extend({
        isNewSerializerAPI: true,
        _serializeItem: function _serializeItem(o) {
            return {
                id: o.ID,
                type: 'blog-post',
                attributes: {
                    title: o.title,
                    URL: o.URL,
                    status: o.status,
                    date: o.date,
                    excerpt: o.excerpt,
                    content: o.content
                }
            };
        },
        _normalizeResponse: function _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
            //console.log("_normalizeResponse");
            var result = {
                data: []
            };
            if (payload === undefined) {
                console.warn("Payload is undefined");
                return result;
            }
            console.log("payload", payload);
            if (isSingle) {
                result.data.push(this._serializeItem(payload));
            } else {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = payload.posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var o = _step.value;

                        result.data.push(this._serializeItem(o));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            console.log("Result", result);
            return result;
        },
        /**
         * convert to new JSONAPI standard as described at
         * http://emberjs.com/blog/2015/06/18/ember-data-1-13-released.html#toc_transition-to-the-new-jsonserializer-and-restserializer-apis
         */
        normalizeFindAllResponse: function normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
            console.log("normalizeFindAllResponse");
            return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
        },
        normalizeFindRecordResponse: function normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
            console.log("normalizeFindRecordResponse");
            return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, true);
        }
    });
});
define('resume/serializers/blogger-blog-post', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].JSONAPISerializer.extend({
        isNewSerializerAPI: true,
        _serializeItem: function _serializeItem(o) {
            return {
                id: o.id,
                type: 'blog-post',
                attributes: {
                    title: o.title,
                    content: o.content
                }
            };
        },
        _normalizeResponse: function _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
            //console.log("_normalizeResponse");
            var result = {
                data: []
            };
            if (payload === undefined) {
                console.warn("Payload is undefined");
                return result;
            }
            //console.log("payload", payload);
            if (isSingle) {
                result.data.push(this._serializeItem(payload));
            } else {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = payload.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var o = _step.value;

                        result.data.push(this._serializeItem(o));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            //console.log("Result", result);
            return result;
        },
        /**
         * convert to new JSONAPI standard as described at
         * http://emberjs.com/blog/2015/06/18/ember-data-1-13-released.html#toc_transition-to-the-new-jsonserializer-and-restserializer-apis
         */
        normalizeFindAllResponse: function normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
            //console.log("normalizeFindAllResponse");
            return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
        },
        normalizeFindRecordResponse: function normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
            //console.log("normalizeFindRecordResponse");
            return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, true);
        }
    });
});
define('resume/serializers/position', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTSerializer.extend({
		primaryKey: 'position_id'
	});
});
define('resume/serializers/project', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].JSONAPISerializer.extend({
        isNewSerializerAPI: true,
        /**
         * convert to new JSONAPI standard as described at
         * http://emberjs.com/blog/2015/06/18/ember-data-1-13-released.html#toc_transition-to-the-new-jsonserializer-and-restserializer-apis
         */
        normalizeFindAllResponse: function normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
            //console.log("normalizeFindAllResponse");
            var result = {
                data: [],
                included: []
            };
            var project_id = 0;
            var thumbnail_id = 0;
            if (payload === undefined) {
                console.warn("Payload is undefined");
                return result;
            }
            //console.log("payload",payload);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = payload.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var o = _step.value;

                    //console.log("o", o);
                    var JSONAPINormalizedObject = {
                        id: project_id.toString(),
                        type: 'project',
                        attributes: {
                            title: o.snippet.title,
                            description: o.snippet.description,
                            videoId: o.snippet.resourceId.videoId
                        },
                        relationships: {
                            projectThumbnails: {
                                data: []
                            }
                        }
                    };
                    var thumbnail = null;
                    var _arr = ['default', 'high', 'maxres', 'medium', 'standard'];
                    for (var _i = 0; _i < _arr.length; _i++) {
                        var k = _arr[_i];
                        thumbnail = payload.items[project_id].snippet.thumbnails[k];
                        if (!thumbnail) {
                            continue;
                        }
                        //console.log("Thumbnail type", k, "width", thumbnail.width, "height", thumbnail.height, "url", thumbnail.url);
                        JSONAPINormalizedObject.relationships.projectThumbnails.data.push({
                            id: thumbnail_id.toString(),
                            type: 'project-thumbnail'
                        });
                        result.included.push({
                            id: thumbnail_id.toString(),
                            type: 'project-thumbnail',
                            attributes: {
                                project: project_id.toString(),
                                thumbnailType: k,
                                width: thumbnail.width,
                                height: thumbnail.height,
                                url: thumbnail.url
                            }
                        });
                        thumbnail_id++;
                    }
                    result.data.push(JSONAPINormalizedObject);
                    project_id++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return result;
        }
    });
});
define('resume/services/event-bus', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend(_ember['default'].Evented, {
    publish: function publish() {
      //console.log("Event bus publish called.  Args: ", arguments);
      return this.trigger.apply(this, arguments);
    },
    subscribe: function subscribe() {
      //console.log("Event bus subscribe called.  Args: ", arguments);
      return this.on.apply(this, arguments);
    },
    unsubscribe: function unsubscribe() {
      //console.log("Event bus unsubscribe called.  Args: ", arguments);
      return this.off.apply(this, arguments);
    }
  });
});
define('resume/services/media', ['exports', 'ember-responsive/media'], function (exports, _emberResponsiveMedia) {
  exports['default'] = _emberResponsiveMedia['default'];
});
define('resume/services/resize', ['exports', 'ember-resize/services/resize'], function (exports, _emberResizeServicesResize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberResizeServicesResize['default'];
    }
  });
});
define("resume/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "resume/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "app-frame");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "main");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["inline", "anim-header", [], ["action", "navTo"], ["loc", [null, [2, 1], [2, 31]]]], ["content", "outlet", ["loc", [null, [4, 2], [4, 14]]]], ["inline", "render", ["footer", ["get", "footer", ["loc", [null, [6, 19], [6, 25]]]]], [], ["loc", [null, [6, 1], [6, 27]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/blog/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 32
              },
              "end": {
                "line": 4,
                "column": 75
              }
            },
            "moduleName": "resume/templates/blog/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "item.title", ["loc", [null, [4, 61], [4, 75]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 6,
                "column": 42
              }
            },
            "moduleName": "resume/templates/blog/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Full post");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "resume/templates/blog/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("article");
          dom.setAttribute(el1, "class", "blog-post");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          dom.setAttribute(el2, "class", "blog-post-title");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "blog-post-content");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createUnsafeMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["block", "link-to", ["blog.post", ["get", "item", ["loc", [null, [4, 55], [4, 59]]]]], [], 0, null, ["loc", [null, [4, 32], [4, 87]]]], ["inline", "code-highlighter", [["get", "item.excerpt", ["loc", [null, [5, 55], [5, 67]]]]], [], ["loc", [null, [5, 35], [5, 70]]]], ["block", "link-to", ["blog.post", ["get", "item", ["loc", [null, [6, 27], [6, 31]]]]], [], 1, null, ["loc", [null, [6, 4], [6, 54]]]]],
        locals: ["item"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 9
          }
        },
        "moduleName": "resume/templates/blog/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "id", "blog-title");
        var el2 = dom.createTextNode("Full Stack Blog");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [2, 8], [2, 13]]]]], [], 0, null, ["loc", [null, [2, 0], [8, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("resume/templates/blog/post", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 10
          }
        },
        "moduleName": "resume/templates/blog/post.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        dom.setAttribute(el1, "class", "blog-post");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "blog-post-title");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "blog-post-content");
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "blog-post-begin");
        var el4 = dom.createTextNode("...");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "blog-post-end");
        var el4 = dom.createTextNode("...");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createUnsafeMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [2, 32], [2, 47]]]], ["inline", "code-highlighter", [["get", "model.content", ["loc", [null, [3, 95], [3, 108]]]]], [], ["loc", [null, [3, 75], [3, 111]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/blog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 8
              },
              "end": {
                "line": 7,
                "column": 8
              }
            },
            "moduleName": "resume/templates/blog.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "blog-title");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "href", "#");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 0]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["selectPost", ["get", "item.id", ["loc", [null, [6, 65], [6, 72]]]]], [], ["loc", [null, [6, 43], [6, 74]]]], ["content", "item.title", ["loc", [null, [6, 75], [6, 89]]]]],
          locals: ["item"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 10,
              "column": 4
            }
          },
          "moduleName": "resume/templates/blog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("nav");
          dom.setAttribute(el1, "role", "navigation");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model", ["loc", [null, [5, 16], [5, 21]]]]], [], 0, null, ["loc", [null, [5, 8], [7, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 6
          }
        },
        "moduleName": "resume/templates/blog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "blog");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "blog-posts");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "toggle-drawer", [], ["drawerWidth", "300px", "drawerPosition", "left", "drawerToggleProperty", ["subexpr", "@mut", [["get", "activePost", ["loc", [null, [2, 84], [2, 94]]]]], [], []]], 0, null, ["loc", [null, [2, 4], [10, 22]]]], ["content", "outlet", ["loc", [null, [12, 8], [12, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("resume/templates/clock", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 42
          }
        },
        "moduleName": "resume/templates/clock.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("strong");
        var el2 = dom.createTextNode("Local time: ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "localTime", ["loc", [null, [1, 29], [1, 42]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/code", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "resume/templates/code.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Under construction");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/anim-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 9
          }
        },
        "moduleName": "resume/templates/components/anim-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "centered-navigation");
        dom.setAttribute(el1, "role", "banner");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "centered-navigation-wrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "top-banner");
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("Aron ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "assets/images/me.jpg");
        dom.setAttribute(el5, "class", "logo-img");
        dom.setAttribute(el5, "alt", "Photo of Aron Beal");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode(" Beal");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "id", "js-centered-navigation-mobile-menu");
        dom.setAttribute(el3, "class", "centered-navigation-mobile-menu fa fa-bars");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3, "role", "navigation");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "id", "js-centered-navigation-menu");
        dom.setAttribute(el4, "class", "centered-navigation-menu");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "nav-link");
        var el6 = dom.createTextNode("Home");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "nav-link");
        var el6 = dom.createTextNode("Blog");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "nav-link");
        var el6 = dom.createTextNode("Projects");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "nav-link");
        var el6 = dom.createTextNode("Contact");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element3, [5]);
        var element7 = dom.childAt(element3, [7]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element1, 'style');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createAttrMorph(element2, 'class');
        morphs[3] = dom.createElementMorph(element4);
        morphs[4] = dom.createElementMorph(element5);
        morphs[5] = dom.createElementMorph(element6);
        morphs[6] = dom.createElementMorph(element7);
        return morphs;
      },
      statements: [["attribute", "style", ["concat", [["get", "togglePadding", ["loc", [null, [7, 107], [7, 120]]]]]]], ["element", "action", ["toggleBody"], [], ["loc", [null, [7, 124], [7, 147]]]], ["attribute", "class", ["concat", [["get", "expandedNavigation", ["loc", [null, [8, 36], [8, 54]]]]]]], ["element", "action", ["navTo", "index"], [], ["loc", [null, [11, 29], [11, 55]]]], ["element", "action", ["navTo", "blog"], [], ["loc", [null, [12, 29], [12, 54]]]], ["element", "action", ["navTo", "projects"], [], ["loc", [null, [13, 29], [13, 58]]]], ["element", "action", ["navTo", "contact"], [], ["loc", [null, [14, 29], [14, 57]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/block-grid-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 303
          }
        },
        "moduleName": "resume/templates/components/block-grid-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "block-grid-item");
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "watch-button");
        var el4 = dom.createTextNode("watch");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "title");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'style');
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["clickable frosted-glass ", ["get", "isActive", ["loc", [null, [2, 68], [2, 76]]]]]]], ["attribute", "style", ["concat", ["width: ", ["get", "backgroundImageWidth", ["loc", [null, [2, 115], [2, 135]]]], "px; height: ", ["get", "backgroundImageHeight", ["loc", [null, [2, 151], [2, 172]]]], "px; background-image:url(", ["get", "backgroundImageURL", ["loc", [null, [2, 201], [2, 219]]]], ")"]]], ["element", "action", ["click"], [], ["loc", [null, [2, 80], [2, 98]]]], ["content", "textValue", ["loc", [null, [2, 280], [2, 293]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/block-grid", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 6
          }
        },
        "moduleName": "resume/templates/components/block-grid.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "block-grid");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 0], [2, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/main-sidebar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "resume/templates/components/main-sidebar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "sidebar");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "side-nav");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Link 1");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Link 2");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Link 3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Link 4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/three-square", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "resume/templates/components/three-square.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/toggle-drawer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 6
          }
        },
        "moduleName": "resume/templates/components/toggle-drawer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1, "class", "fa fa-bars toggle-drawer-toggle");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "toggle-drawer-content");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'style');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "style", ["concat", [["get", "togglePadding", ["loc", [null, [1, 52], [1, 65]]]]]]], ["element", "action", ["drawerToggle"], [], ["loc", [null, [1, 69], [1, 94]]]], ["content", "yield", ["loc", [null, [3, 0], [3, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/top-navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["empty-body"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "resume/templates/components/top-navbar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/x-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "resume/templates/components/x-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/components/youtube-iframeplayer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "resume/templates/components/youtube-iframeplayer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "id", "videoDescription");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
          return morphs;
        },
        statements: [["content", "videoDescription", ["loc", [null, [8, 25], [8, 45]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 75
            }
          },
          "moduleName": "resume/templates/components/youtube-iframeplayer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "metadata");
          var el2 = dom.createTextNode("(playing video id ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(")");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["content", "youtube_id", ["loc", [null, [10, 56], [10, 70]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "resume/templates/components/youtube-iframeplayer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "boxclose");
        dom.setAttribute(el1, "id", "boxclose");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("iframe");
        dom.setAttribute(el1, "id", "ytplayer");
        dom.setAttribute(el1, "type", "text/html");
        dom.setAttribute(el1, "frameborder", "0");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [5]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'src');
        morphs[2] = dom.createAttrMorph(element0, 'width');
        morphs[3] = dom.createAttrMorph(element0, 'height');
        morphs[4] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["content", "videoTitle", ["loc", [null, [3, 4], [3, 18]]]], ["attribute", "src", ["concat", [["get", "youtubeSrc", ["loc", [null, [5, 9], [5, 19]]]]]]], ["attribute", "width", ["concat", [["get", "playerWidth", ["loc", [null, [5, 32], [5, 43]]]]]]], ["attribute", "height", ["concat", [["get", "playerHeight", ["loc", [null, [5, 57], [5, 69]]]]]]], ["block", "if", [["get", "videoDescription", ["loc", [null, [7, 6], [7, 22]]]]], [], 0, null, ["loc", [null, [7, 0], [9, 7]]]], ["block", "if", [["get", "youtube_id", ["loc", [null, [10, 6], [10, 16]]]]], [], 1, null, ["loc", [null, [10, 0], [10, 82]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("resume/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "resume/templates/contact.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "contact");
        var el2 = dom.createTextNode("\n  	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Contact me");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Contact me at aron dot beal dot biz at gmail dot com");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 4
            }
          },
          "moduleName": "resume/templates/error.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
          return morphs;
        },
        statements: [["inline", "log", [["get", "item", ["loc", [null, [6, 10], [6, 14]]]]], [], ["loc", [null, [6, 4], [6, 16]]]], ["content", "item", ["loc", [null, [7, 7], [7, 15]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 6
          }
        },
        "moduleName": "resume/templates/error.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "application-error");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "center-dialog");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Application Error!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 3, 3);
        morphs[1] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["inline", "log", [["get", "errors", ["loc", [null, [4, 10], [4, 16]]]]], [], ["loc", [null, [4, 4], [4, 18]]]], ["block", "each", [["get", "model", ["loc", [null, [5, 12], [5, 17]]]]], [], 0, null, ["loc", [null, [5, 4], [8, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("resume/templates/footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 1
            },
            "end": {
              "line": 6,
              "column": 72
            }
          },
          "moduleName": "resume/templates/footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "fa fa-smile-o");
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Contact");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 9
          }
        },
        "moduleName": "resume/templates/footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "id", "main-footer");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/images/me.jpg");
        dom.setAttribute(el2, "id", "footer-logo");
        dom.setAttribute(el2, "class", "logo-img circle");
        dom.setAttribute(el2, "alt", "Photo of Aron Beal");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://bitbucket.org/abeal_webstoc");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-github");
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("Git");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://ca.linkedin.com/pub/aron-beal/3/745/586");
        dom.setAttribute(el2, "target", "_blank");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-linkedin");
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("LinkedIn");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 7, 7);
        return morphs;
      },
      statements: [["block", "link-to", ["contact"], [], 0, null, ["loc", [null, [6, 1], [6, 84]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("resume/templates/header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "resume/templates/header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" Begin header ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "src", "assets/images/me.jpg");
        dom.setAttribute(el1, "alt", "Photo of Aron Beal");
        dom.setAttribute(el1, "class", "responsive-img circle");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "resume/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Hello world");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("I'm a web developer with a focus on front-end work, whose primary experience has been in PHP and Drupal. This site is meant to be a repository of problems and solutions I've discovered while working in both worlds, as well as a working demonstration of technologies I'm currently interested in and experiments in the same. I sincerely hope that it is useful to others along the way, as I've gleaned a lot of knowledge over the years from folks who took the time to answer questions in a searchable format, and I'd like to be able to reciprocate.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 6
          }
        },
        "moduleName": "resume/templates/loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "app-loading");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Loading");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        return morphs;
      },
      statements: [["inline", "loading-slider", [], ["isLoading", ["subexpr", "@mut", [["get", "loading", ["loc", [null, [3, 28], [3, 35]]]]], [], []], "duration", 250], ["loc", [null, [3, 1], [3, 50]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 6
          }
        },
        "moduleName": "resume/templates/not-found.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "not-found");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("404 Not Found");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    Perhaps you have a link that has changed.\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/projects/id", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "resume/templates/projects/id.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/projects", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 10,
                "column": 8
              }
            },
            "moduleName": "resume/templates/projects.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "project-navigation-item clickable frosted-glass");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("img");
            dom.setAttribute(el2, "class", "project-navigation-thumbnail");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "watch-button");
            var el3 = dom.createTextNode("watch");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "title");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(6);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createAttrMorph(element1, 'src');
            morphs[2] = dom.createAttrMorph(element1, 'alt');
            morphs[3] = dom.createAttrMorph(element1, 'width');
            morphs[4] = dom.createAttrMorph(element1, 'height');
            morphs[5] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["updateYoutubeVideo", ["get", "gridItem", ["loc", [null, [5, 99], [5, 107]]]]], [], ["loc", [null, [5, 69], [5, 109]]]], ["attribute", "src", ["concat", [["get", "gridItem.defaultThumbnail.url", ["loc", [null, [6, 61], [6, 90]]]]]]], ["attribute", "alt", ["concat", ["video thumbnail for ", ["get", "gridItem.title", ["loc", [null, [6, 121], [6, 135]]]]]]], ["attribute", "width", ["concat", [["get", "gridItem.defaultThumbnail.width", ["loc", [null, [6, 148], [6, 179]]]]]]], ["attribute", "height", ["concat", [["get", "gridItem.defaultThumbnail.height", ["loc", [null, [6, 193], [6, 225]]]]]]], ["content", "gridItem.title", ["loc", [null, [8, 29], [8, 47]]]]],
          locals: ["gridItem"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 4
            }
          },
          "moduleName": "resume/templates/projects.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("nav");
          dom.setAttribute(el1, "id", "project-navigation");
          dom.setAttribute(el1, "role", "navigation");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model", ["loc", [null, [4, 16], [4, 21]]]]], [], 0, null, ["loc", [null, [4, 8], [10, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 6
          }
        },
        "moduleName": "resume/templates/projects.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "projects");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "projects-current-project-video");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createAttrMorph(element3, 'class');
        morphs[2] = dom.createMorphAt(element3, 0, 0);
        return morphs;
      },
      statements: [["block", "toggle-drawer", [], ["drawerWidth", "300px", "drawerPosition", "left", "drawerToggleProperty", ["subexpr", "@mut", [["get", "activeObject", ["loc", [null, [2, 84], [2, 96]]]]], [], []]], 0, null, ["loc", [null, [2, 4], [12, 22]]]], ["attribute", "class", ["concat", [["get", "drawerActiveClass", ["loc", [null, [13, 54], [13, 71]]]]]]], ["inline", "youtube-iframeplayer", [], ["video", ["subexpr", "@mut", [["get", "activeObject", ["loc", [null, [13, 104], [13, 116]]]]], [], []], "youtubePlaylistId", "PLd06W5y1jnqHdtCOkwwY_yrTDqIpiO-Bw"], ["loc", [null, [13, 75], [13, 173]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("resume/templates/resume/sidebar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["empty-body"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "resume/templates/resume/sidebar.hbs"
      },
      isEmpty: true,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/resume/summary", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 10
          }
        },
        "moduleName": "resume/templates/resume/summary.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "resume-summary");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Summary");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        return morphs;
      },
      statements: [["content", "this.summary", ["loc", [null, [3, 1], [3, 17]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("resume/templates/resume", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "resume/templates/resume.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("iframe");
        dom.setAttribute(el1, "id", "resume");
        dom.setAttribute(el1, "width", "100%");
        dom.setAttribute(el1, "height", "100%");
        dom.setAttribute(el1, "src", "https://docs.google.com/document/d/1BSV53yOFWEIYWffNKEh44HdRt4hup7_U4-KEFiPl6Ik/pub?embedded=true");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "style", "");
        var el3 = dom.createTextNode("\n		Your browser does not support iframes.  Download ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "https://docs.google.com/document/d/1BSV53yOFWEIYWffNKEh44HdRt4hup7_U4-KEFiPl6Ik/edit?usp=sharing");
        var el4 = dom.createTextNode("here");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("resume/transitions", ["exports"], function (exports) {});
/* used by liquid fire */
// export default function(){
//   this.transition(
//     this.fromRoute('resume.index'),
//     this.use('toLeft'),
//     this.reverse('toRight')
//   );
// }
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('resume/config/environment', ['ember'], function(Ember) {
  var prefix = 'resume';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("resume/app")["default"].create({"name":"resume","version":"0.0.0+e26f1a7b"});
}

/* jshint ignore:end */
//# sourceMappingURL=resume.map