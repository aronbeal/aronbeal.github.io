define('resume/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('resume/tests/adapters/blog-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/blog-post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/blog-post.js should pass jshint.\nadapters/blog-post.js: line 17, col 27, \'modelName\' is defined but never used.\nadapters/blog-post.js: line 31, col 36, \'sinceToken\' is defined but never used.\nadapters/blog-post.js: line 35, col 43, \'snapshot\' is defined but never used.\n\n3 errors');
  });
});
define('resume/tests/adapters/blogger-blog-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/blogger-blog-post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/blogger-blog-post.js should pass jshint.\nadapters/blogger-blog-post.js: line 18, col 27, \'modelName\' is defined but never used.\nadapters/blogger-blog-post.js: line 50, col 43, \'snapshot\' is defined but never used.\nadapters/blogger-blog-post.js: line 65, col 40, \'recordArray\' is defined but never used.\nadapters/blogger-blog-post.js: line 65, col 33, \'query\' is defined but never used.\n\n4 errors');
  });
});
define('resume/tests/adapters/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/project.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/project.js should pass jshint.\nadapters/project.js: line 26, col 50, Unexpected \')\'.\nadapters/project.js: line 26, col 50, Expected an identifier and instead saw \')\'.\nadapters/project.js: line 30, col 32, \'function closure expressions\' is only available in Mozilla JavaScript extensions (use moz option).\nadapters/project.js: line 30, col 33, Expected an identifier and instead saw \',\'.\nadapters/project.js: line 31, col 13, Expected \'}\' to match \'{\' from line 4 and instead saw \'part\'.\nadapters/project.js: line 31, col 17, Expected \')\' and instead saw \':\'.\nadapters/project.js: line 31, col 18, Missing semicolon.\nadapters/project.js: line 32, col 13, Expected an assignment or function call and instead saw an expression.\nadapters/project.js: line 32, col 23, Missing semicolon.\nadapters/project.js: line 32, col 23, Unrecoverable syntax error. (62% scanned).\n\n11 errors');
  });
});
define('resume/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('resume/tests/breakpoints.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('breakpoints.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass jshint.');
  });
});
define('resume/tests/components/anim-header.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/anim-header.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/anim-header.js should pass jshint.');
  });
});
define('resume/tests/components/block-grid-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/block-grid-item.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/block-grid-item.js should pass jshint.');
  });
});
define('resume/tests/components/block-grid.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/block-grid.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/block-grid.js should pass jshint.\ncomponents/block-grid.js: line 27, col 12, \'activeObjectId\' is not defined.\ncomponents/block-grid.js: line 30, col 38, \'activeObjectId\' is not defined.\n\n2 errors');
  });
});
define('resume/tests/components/main-sidebar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/main-sidebar.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-sidebar.js should pass jshint.');
  });
});
define('resume/tests/components/three-square.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/three-square.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/three-square.js should pass jshint.');
  });
});
define('resume/tests/components/toggle-drawer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/toggle-drawer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/toggle-drawer.js should pass jshint.');
  });
});
define('resume/tests/components/top-navbar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/top-navbar.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/top-navbar.js should pass jshint.');
  });
});
define('resume/tests/components/youtube-iframeplayer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/youtube-iframeplayer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/youtube-iframeplayer.js should pass jshint.');
  });
});
define('resume/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('resume/tests/controllers/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/blog.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/blog.js should pass jshint.');
  });
});
define('resume/tests/controllers/clock.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/clock.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/clock.js should pass jshint.');
  });
});
define('resume/tests/controllers/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/contact.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/contact.js should pass jshint.\ncontrollers/contact.js: line 14, col 54, Unexpected \')\'.\ncontrollers/contact.js: line 14, col 54, Expected an identifier and instead saw \')\'.\ncontrollers/contact.js: line 14, col 55, Expected \')\' and instead saw \';\'.\ncontrollers/contact.js: line 14, col 56, Missing semicolon.\n\n4 errors');
  });
});
define('resume/tests/controllers/projects.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/projects.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/projects.js should pass jshint.');
  });
});
define('resume/tests/controllers/resume/education.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/resume');
  QUnit.test('controllers/resume/education.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/resume/education.js should pass jshint.');
  });
});
define('resume/tests/controllers/resume/positions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/resume');
  QUnit.test('controllers/resume/positions.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/resume/positions.js should pass jshint.');
  });
});
define('resume/tests/controllers/resume/summary.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/resume');
  QUnit.test('controllers/resume/summary.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/resume/summary.js should pass jshint.');
  });
});
define('resume/tests/controllers/resume.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/resume.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/resume.js should pass jshint.');
  });
});
define('resume/tests/helpers/code-highlighter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/code-highlighter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/code-highlighter.js should pass jshint.\nhelpers/code-highlighter.js: line 24, col 35, Unexpected escaped character \'<\' in regular expression.\nhelpers/code-highlighter.js: line 24, col 35, Unexpected escaped character \'<\' in regular expression.\nhelpers/code-highlighter.js: line 24, col 35, Unexpected escaped character \'<\' in regular expression.\nhelpers/code-highlighter.js: line 8, col 12, \'$\' is not defined.\n\n4 errors');
  });
});
define('resume/tests/helpers/date-formatter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/date-formatter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/date-formatter.js should pass jshint.');
  });
});
define('resume/tests/helpers/line-drawer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/line-drawer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/line-drawer.js should pass jshint.');
  });
});
define('resume/tests/helpers/markdown-to-html.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/markdown-to-html.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/markdown-to-html.js should pass jshint.');
  });
});
define('resume/tests/helpers/param-value.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/param-value.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/param-value.js should pass jshint.');
  });
});
define('resume/tests/helpers/register-select-helper', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('select', function (app, selector) {
      for (var _len = arguments.length, texts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        texts[_key - 2] = arguments[_key];
      }

      var $options = app.testHelpers.findWithAssert(selector + ' option');

      $options.each(function () {
        var _this = this;

        var $option = _ember['default'].$(this);

        _ember['default'].run(function () {
          _this.selected = texts.some(function (text) {
            return $option.is(':contains(\'' + text + '\')');
          });
          $option.trigger('change');
        });
      });

      return app.testHelpers.wait();
    });
  };
});
define('resume/tests/helpers/resolver', ['exports', 'ember/resolver', 'resume/config/environment'], function (exports, _emberResolver, _resumeConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _resumeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _resumeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('resume/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('resume/tests/helpers/start-app', ['exports', 'ember', 'resume/app', 'resume/config/environment'], function (exports, _ember, _resumeApp, _resumeConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application;

    var attributes = _ember['default'].merge({}, _resumeConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _resumeApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('resume/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('resume/tests/initializers/event-bus.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/event-bus.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/event-bus.js should pass jshint.');
  });
});
define('resume/tests/integration/components/anim-header-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('anim-header', 'Integration | Component | anim header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'anim-header', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'anim-header', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('resume/tests/integration/components/anim-header-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/anim-header-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/anim-header-test.js should pass jshint.');
  });
});
define('resume/tests/integration/components/block-grid-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('block-grid-item', 'Integration | Component | block grid item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'block-grid-item', ['loc', [null, [1, 0], [1, 19]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'block-grid-item', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('resume/tests/integration/components/block-grid-item-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/block-grid-item-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/block-grid-item-test.js should pass jshint.');
  });
});
define('resume/tests/integration/components/block-grid-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('block-grid', 'Integration | Component | block grid', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'block-grid', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'block-grid', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('resume/tests/integration/components/block-grid-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/block-grid-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/block-grid-test.js should pass jshint.');
  });
});
define('resume/tests/integration/components/main-sidebar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('main-sidebar', 'Integration | Component | main sidebar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'main-sidebar', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'main-sidebar', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('resume/tests/integration/components/main-sidebar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/main-sidebar-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-sidebar-test.js should pass jshint.');
  });
});
define('resume/tests/integration/components/toggle-drawer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('toggle-drawer', 'Integration | Component | toggle drawer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'toggle-drawer', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'toggle-drawer', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('resume/tests/integration/components/toggle-drawer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/toggle-drawer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/toggle-drawer-test.js should pass jshint.');
  });
});
define('resume/tests/integration/components/top-navbar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('top-navbar', 'Integration | Component | top navbar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'top-navbar', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'top-navbar', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('resume/tests/integration/components/top-navbar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/top-navbar-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/top-navbar-test.js should pass jshint.');
  });
});
define('resume/tests/integration/components/youtube-iframeplayer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('youtube-iframeplayer', 'Integration | Component | youtube iframeplayer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 24
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'youtube-iframeplayer', ['loc', [null, [1, 0], [1, 24]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'youtube-iframeplayer', [], [], 0, null, ['loc', [null, [2, 4], [4, 29]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('resume/tests/integration/components/youtube-iframeplayer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/youtube-iframeplayer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/youtube-iframeplayer-test.js should pass jshint.');
  });
});
define('resume/tests/lib/threejs/line-rain.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - lib/threejs');
  QUnit.test('lib/threejs/line-rain.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'lib/threejs/line-rain.js should pass jshint.\nlib/threejs/line-rain.js: line 14, col 11, Expected an assignment or function call and instead saw an expression.\nlib/threejs/line-rain.js: line 14, col 15, Missing semicolon.\nlib/threejs/line-rain.js: line 20, col 24, \'Squiggle\' is not defined.\nlib/threejs/line-rain.js: line 2, col 8, \'Ember\' is defined but never used.\nlib/threejs/line-rain.js: line 19, col 10, \'drawSquiggle\' is defined but never used.\n\n5 errors');
  });
});
define('resume/tests/lib/threejs/planewall.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - lib/threejs');
  QUnit.test('lib/threejs/planewall.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'lib/threejs/planewall.js should pass jshint.\nlib/threejs/planewall.js: line 5, col 5, \'WallOfPlanes\' is defined but never used.\n\n1 error');
  });
});
define('resume/tests/lib/threejs/setup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - lib/threejs');
  QUnit.test('lib/threejs/setup.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'lib/threejs/setup.js should pass jshint.\nlib/threejs/setup.js: line 9, col 20, \'e\' is defined but never used.\n\n1 error');
  });
});
define('resume/tests/lib/threejs/squiggle.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - lib/threejs');
  QUnit.test('lib/threejs/squiggle.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'lib/threejs/squiggle.js should pass jshint.\nlib/threejs/squiggle.js: line 15, col 6, Missing semicolon.\nlib/threejs/squiggle.js: line 2, col 8, \'Ember\' is defined but never used.\nlib/threejs/squiggle.js: line 4, col 9, \'geometry\' is defined but never used.\nlib/threejs/squiggle.js: line 3, col 46, \'start\' is defined but never used.\n\n4 errors');
  });
});
define('resume/tests/lib/threejs/template.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - lib/threejs');
  QUnit.test('lib/threejs/template.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'lib/threejs/template.js should pass jshint.\nlib/threejs/template.js: line 3, col 8, \'Ember\' is defined but never used.\nlib/threejs/template.js: line 2, col 1, \'THREE\' is defined but never used.\n\n2 errors');
  });
});
define('resume/tests/mixins/in-viewport.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins');
  QUnit.test('mixins/in-viewport.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/in-viewport.js should pass jshint.');
  });
});
define('resume/tests/mixins/lazy-loader.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins');
  QUnit.test('mixins/lazy-loader.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/lazy-loader.js should pass jshint.\nmixins/lazy-loader.js: line 5, col 33, \'scriptName\' is not defined.\nmixins/lazy-loader.js: line 6, col 14, \'$\' is not defined.\nmixins/lazy-loader.js: line 6, col 26, \'scriptName\' is not defined.\n\n3 errors');
  });
});
define('resume/tests/models/blog-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/blog-post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/blog-post.js should pass jshint.');
  });
});
define('resume/tests/models/blogger-blog-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/blogger-blog-post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/blogger-blog-post.js should pass jshint.');
  });
});
define('resume/tests/models/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/contact.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contact.js should pass jshint.');
  });
});
define('resume/tests/models/highlight.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/highlight.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/highlight.js should pass jshint.');
  });
});
define('resume/tests/models/project-thumbnail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/project-thumbnail.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project-thumbnail.js should pass jshint.');
  });
});
define('resume/tests/models/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/project.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/project.js should pass jshint.\nmodels/project.js: line 10, col 23, \'Ember\' is not defined.\n\n1 error');
  });
});
define('resume/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('resume/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('resume/tests/routes/blog/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/blog');
  QUnit.test('routes/blog/post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blog/post.js should pass jshint.');
  });
});
define('resume/tests/routes/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/blog.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blog.js should pass jshint.');
  });
});
define('resume/tests/routes/clock.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/clock.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/clock.js should pass jshint.');
  });
});
define('resume/tests/routes/code.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/code.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/code.js should pass jshint.');
  });
});
define('resume/tests/routes/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/contact.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass jshint.');
  });
});
define('resume/tests/routes/error.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/error.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/error.js should pass jshint.');
  });
});
define('resume/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('resume/tests/routes/not-found.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/not-found.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/not-found.js should pass jshint.');
  });
});
define('resume/tests/routes/projects/id.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/projects');
  QUnit.test('routes/projects/id.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects/id.js should pass jshint.');
  });
});
define('resume/tests/routes/projects.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/projects.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/projects.js should pass jshint.\nroutes/projects.js: line 42, col 36, \'transition\' is defined but never used.\n\n1 error');
  });
});
define('resume/tests/routes/resume/education.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/resume');
  QUnit.test('routes/resume/education.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/resume/education.js should pass jshint.');
  });
});
define('resume/tests/routes/resume/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/resume');
  QUnit.test('routes/resume/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/resume/index.js should pass jshint.');
  });
});
define('resume/tests/routes/resume/positions/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/resume/positions');
  QUnit.test('routes/resume/positions/add.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/resume/positions/add.js should pass jshint.');
  });
});
define('resume/tests/routes/resume/positions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/resume');
  QUnit.test('routes/resume/positions.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/resume/positions.js should pass jshint.');
  });
});
define('resume/tests/routes/resume/summary.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/resume');
  QUnit.test('routes/resume/summary.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/resume/summary.js should pass jshint.');
  });
});
define('resume/tests/serializers/blog-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/blog-post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/blog-post.js should pass jshint.');
  });
});
define('resume/tests/serializers/blogger-blog-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/blogger-blog-post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/blogger-blog-post.js should pass jshint.');
  });
});
define('resume/tests/serializers/position.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/position.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/position.js should pass jshint.');
  });
});
define('resume/tests/serializers/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/project.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/project.js should pass jshint.\nserializers/project.js: line 8, col 69, \'requestType\' is defined but never used.\nserializers/project.js: line 8, col 65, \'id\' is defined but never used.\n\n2 errors');
  });
});
define('resume/tests/services/event-bus.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/event-bus.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/event-bus.js should pass jshint.');
  });
});
define('resume/tests/test-helper', ['exports', 'resume/tests/helpers/resolver', 'resume/tests/helpers/register-select-helper', 'ember-qunit'], function (exports, _resumeTestsHelpersResolver, _resumeTestsHelpersRegisterSelectHelper, _emberQunit) {
  (0, _resumeTestsHelpersRegisterSelectHelper['default'])();

  (0, _emberQunit.setResolver)(_resumeTestsHelpersResolver['default']);
});
define('resume/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('resume/tests/transitions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('transitions.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass jshint.');
  });
});
define('resume/tests/unit/adapters/blog-post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:blog-post', 'Unit | Adapter | blog post', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('resume/tests/unit/adapters/blog-post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/blog-post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/blog-post-test.js should pass jshint.');
  });
});
define('resume/tests/unit/adapters/position.js-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:position.js', 'Unit | Adapter | position.js', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('resume/tests/unit/adapters/position.js-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/position.js-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/position.js-test.js should pass jshint.');
  });
});
define('resume/tests/unit/adapters/positions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:positions', 'Unit | Adapter | positions', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('resume/tests/unit/adapters/positions-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/positions-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/positions-test.js should pass jshint.');
  });
});
define('resume/tests/unit/adapters/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:project', 'Unit | Adapter | project', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('resume/tests/unit/adapters/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/project-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/project-test.js should pass jshint.');
  });
});
define('resume/tests/unit/adapters/wordpress-blog-post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:wordpress-blog-post', 'Unit | Adapter | wordpress blog post', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('resume/tests/unit/adapters/wordpress-blog-post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/wordpress-blog-post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/wordpress-blog-post-test.js should pass jshint.');
  });
});
define('resume/tests/unit/components/three-square-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('three-square', 'Unit | Component | three square', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('resume/tests/unit/components/three-square-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/components');
  QUnit.test('unit/components/three-square-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/three-square-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/blog-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:blog', 'Unit | Controller | blog', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/blog-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/blog-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/blog-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/clock-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:clock', 'ClockController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/clock-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/clock-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/clock-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:contact', 'Unit | Controller | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/contact-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contact-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/header.js-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:header.js', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/header.js-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/header.js-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/header.js-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/projects-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/projects-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/projects-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/projects-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/resume/education-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:resume/education', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/resume/education-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/resume');
  QUnit.test('unit/controllers/resume/education-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/resume/education-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/resume/positions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:resume/positions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/resume/positions-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/resume');
  QUnit.test('unit/controllers/resume/positions-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/resume/positions-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/resume/sidebar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:resume/sidebar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/resume/sidebar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/resume');
  QUnit.test('unit/controllers/resume/sidebar-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/resume/sidebar-test.js should pass jshint.');
  });
});
define('resume/tests/unit/controllers/resume/summary-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:resume/summary', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('resume/tests/unit/controllers/resume/summary-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/resume');
  QUnit.test('unit/controllers/resume/summary-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/resume/summary-test.js should pass jshint.');
  });
});
define('resume/tests/unit/helpers/code-highlighter-test', ['exports', 'resume/helpers/code-highlighter', 'qunit'], function (exports, _resumeHelpersCodeHighlighter, _qunit) {

  (0, _qunit.module)('Unit | Helper | code highlighter');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _resumeHelpersCodeHighlighter.codeHighlighter)(42);
    assert.ok(result);
  });
});
define('resume/tests/unit/helpers/code-highlighter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/code-highlighter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/code-highlighter-test.js should pass jshint.');
  });
});
define('resume/tests/unit/helpers/date-formatter-test', ['exports', 'resume/helpers/date-formatter', 'qunit'], function (exports, _resumeHelpersDateFormatter, _qunit) {

  (0, _qunit.module)('Unit | Helper | date formatter');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _resumeHelpersDateFormatter.dateFormatter)(42);
    assert.ok(result);
  });
});
define('resume/tests/unit/helpers/date-formatter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/date-formatter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/date-formatter-test.js should pass jshint.');
  });
});
define('resume/tests/unit/helpers/line-drawer-test', ['exports', 'resume/helpers/line-drawer', 'qunit'], function (exports, _resumeHelpersLineDrawer, _qunit) {

  (0, _qunit.module)('Unit | Helper | line drawer');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _resumeHelpersLineDrawer.lineDrawer)(42);
    assert.ok(result);
  });
});
define('resume/tests/unit/helpers/line-drawer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/line-drawer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/line-drawer-test.js should pass jshint.');
  });
});
define('resume/tests/unit/helpers/markdown-to-html-test', ['exports', 'resume/helpers/markdown-to-html', 'qunit'], function (exports, _resumeHelpersMarkdownToHtml, _qunit) {

  (0, _qunit.module)('MarkdownToHtmlHelper');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _resumeHelpersMarkdownToHtml.markdownToHtml)(42);
    assert.ok(result);
  });
});
define('resume/tests/unit/helpers/markdown-to-html-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/markdown-to-html-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/markdown-to-html-test.js should pass jshint.');
  });
});
define('resume/tests/unit/helpers/param-value-test', ['exports', 'resume/helpers/param-value', 'qunit'], function (exports, _resumeHelpersParamValue, _qunit) {

  (0, _qunit.module)('Unit | Helper | param value');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _resumeHelpersParamValue.paramValue)(42);
    assert.ok(result);
  });
});
define('resume/tests/unit/helpers/param-value-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/param-value-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/param-value-test.js should pass jshint.');
  });
});
define('resume/tests/unit/initializers/event-bus-test', ['exports', 'ember', 'resume/initializers/event-bus', 'qunit'], function (exports, _ember, _resumeInitializersEventBus, _qunit) {

  var registry, application;

  (0, _qunit.module)('Unit | Initializer | event bus', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        registry = application.registry;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _resumeInitializersEventBus.initialize)(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('resume/tests/unit/initializers/event-bus-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/event-bus-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/event-bus-test.js should pass jshint.');
  });
});
define('resume/tests/unit/mixins/after-render-test', ['exports', 'ember', 'ember-qunit', 'ember-cli-2/mixins/after-render'], function (exports, _ember, _emberQunit, _emberCli2MixinsAfterRender) {

  (0, _emberQunit.module)('AfterRenderMixin');

  // Replace this with your real tests.
  (0, _emberQunit.test)('it works', function (assert) {
    var AfterRenderObject = _ember['default'].Object.extend(_emberCli2MixinsAfterRender['default']);
    var subject = AfterRenderObject.create();
    assert.ok(subject);
  });
});
define('resume/tests/unit/mixins/after-render-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/after-render-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/after-render-test.js should pass jshint.');
  });
});
define('resume/tests/unit/mixins/in-viewport-test', ['exports', 'ember', 'resume/mixins/in-viewport', 'qunit'], function (exports, _ember, _resumeMixinsInViewport, _qunit) {

  (0, _qunit.module)('Unit | Mixin | in viewport');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var InViewportObject = _ember['default'].Object.extend(_resumeMixinsInViewport['default']);
    var subject = InViewportObject.create();
    assert.ok(subject);
  });
});
define('resume/tests/unit/mixins/in-viewport-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/in-viewport-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/in-viewport-test.js should pass jshint.');
  });
});
define('resume/tests/unit/mixins/lazy-loader-test', ['exports', 'ember', 'resume/mixins/lazy-loader', 'qunit'], function (exports, _ember, _resumeMixinsLazyLoader, _qunit) {

  (0, _qunit.module)('Unit | Mixin | lazy loader');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var LazyLoaderObject = _ember['default'].Object.extend(_resumeMixinsLazyLoader['default']);
    var subject = LazyLoaderObject.create();
    assert.ok(subject);
  });
});
define('resume/tests/unit/mixins/lazy-loader-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/lazy-loader-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/lazy-loader-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/blog-post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('blog-post', 'Unit | Model | blog post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/blog-post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/blog-post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/blog-post-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('contact', 'Unit | Model | contact', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/contact-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contact-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/highlights-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('highlights', 'Unit | Model | highlights', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/highlights-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/highlights-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/highlights-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('project', 'Unit | Model | project', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/project-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/project-thumbnail-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('project-thumbnail', 'Unit | Model | project thumbnail', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/project-thumbnail-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/project-thumbnail-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-thumbnail-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/resume/position-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('resume/position', 'Unit | Model | resume/position', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/resume/position-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/resume');
  QUnit.test('unit/models/resume/position-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/resume/position-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/resume/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('resume/project', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/resume/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/resume');
  QUnit.test('unit/models/resume/project-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/resume/project-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/resume/summary-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('resume/summary', 'Unit | Model | resume/summary', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/resume/summary-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/resume');
  QUnit.test('unit/models/resume/summary-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/resume/summary-test.js should pass jshint.');
  });
});
define('resume/tests/unit/models/resume-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('resume', 'Resume', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('resume/tests/unit/models/resume-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/resume-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/resume-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/blog/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:blog/post', 'Unit | Route | blog/post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/blog/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/blog');
  QUnit.test('unit/routes/blog/post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/blog/post-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/blog-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:blog', 'Unit | Route | blog', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/blog-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/blog-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/blog-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/clock-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:clock', 'ClockRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/clock-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/clock-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/clock-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/code-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:code', 'Unit | Route | code', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/code-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/code-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/code-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/contact-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/error-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:error', 'Unit | Route | error', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/error-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/error-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/error-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/not-found-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:not-found', 'Unit | Route | not found', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/not-found-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/not-found-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/not-found-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/projects/id-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:projects/id', 'Unit | Route | projects/id', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/projects/id-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/projects');
  QUnit.test('unit/routes/projects/id-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects/id-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/projects-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:projects', 'Unit | Route | projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/projects-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/projects-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/resume/education-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:resume/education', 'ResumeEducationRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/resume/education-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/resume');
  QUnit.test('unit/routes/resume/education-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resume/education-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/resume/position-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:resume/position', 'ResumePositionRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/resume/position-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/resume');
  QUnit.test('unit/routes/resume/position-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resume/position-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/resume/positions/add-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:resume/positions/add', 'Unit | Route | resume/positions/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/resume/positions/add-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/resume/positions');
  QUnit.test('unit/routes/resume/positions/add-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resume/positions/add-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/resume/positions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:resume/positions', 'ResumePositionsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/resume/positions-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/resume');
  QUnit.test('unit/routes/resume/positions-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resume/positions-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/resume/summary-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:resume/summary', 'Unit | Route | resume/summary', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/resume/summary-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/resume');
  QUnit.test('unit/routes/resume/summary-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resume/summary-test.js should pass jshint.');
  });
});
define('resume/tests/unit/routes/resume-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:resume', 'ResumeRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('resume/tests/unit/routes/resume-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/resume-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resume-test.js should pass jshint.');
  });
});
define('resume/tests/unit/serializers/blog-post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('blog-post', 'Unit | Serializer | blog post', {
    // Specify the other units that are required for this test.
    needs: ['serializer:blog-post']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('resume/tests/unit/serializers/blog-post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/blog-post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/blog-post-test.js should pass jshint.');
  });
});
define('resume/tests/unit/serializers/position-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('position', 'Unit | Serializer | position', {
    // Specify the other units that are required for this test.
    needs: ['serializer:position']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('resume/tests/unit/serializers/position-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/position-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/position-test.js should pass jshint.');
  });
});
define('resume/tests/unit/serializers/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('project', 'Unit | Serializer | project', {
    // Specify the other units that are required for this test.
    needs: ['serializer:project']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('resume/tests/unit/serializers/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/project-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/project-test.js should pass jshint.');
  });
});
define('resume/tests/unit/serializers/wordpress-blog-post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('wordpress-blog-post', 'Unit | Serializer | wordpress blog post', {
    // Specify the other units that are required for this test.
    needs: ['serializer:wordpress-blog-post']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('resume/tests/unit/serializers/wordpress-blog-post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/wordpress-blog-post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/wordpress-blog-post-test.js should pass jshint.');
  });
});
define('resume/tests/unit/services/event-bus-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:event-bus', 'Unit | Service | event bus', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('resume/tests/unit/services/event-bus-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/event-bus-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/event-bus-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('resume/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map