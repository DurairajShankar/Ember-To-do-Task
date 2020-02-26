'use strict';



;define("to-do-app/app", ["exports", "to-do-app/resolver", "ember-load-initializers", "to-do-app/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("to-do-app/components/one-way-checkbox", ["exports", "ember-one-way-controls/components/one-way-checkbox"], function (_exports, _oneWayCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayCheckbox.default;
    }
  });
});
;define("to-do-app/components/one-way-color", ["exports", "ember-one-way-controls/components/one-way-color"], function (_exports, _oneWayColor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayColor.default;
    }
  });
});
;define("to-do-app/components/one-way-date", ["exports", "ember-one-way-controls/components/one-way-date"], function (_exports, _oneWayDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayDate.default;
    }
  });
});
;define("to-do-app/components/one-way-datetime-local", ["exports", "ember-one-way-controls/components/one-way-datetime-local"], function (_exports, _oneWayDatetimeLocal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayDatetimeLocal.default;
    }
  });
});
;define("to-do-app/components/one-way-email", ["exports", "ember-one-way-controls/components/one-way-email"], function (_exports, _oneWayEmail) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayEmail.default;
    }
  });
});
;define("to-do-app/components/one-way-file", ["exports", "ember-one-way-controls/components/one-way-file"], function (_exports, _oneWayFile) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayFile.default;
    }
  });
});
;define("to-do-app/components/one-way-hidden", ["exports", "ember-one-way-controls/components/one-way-hidden"], function (_exports, _oneWayHidden) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayHidden.default;
    }
  });
});
;define("to-do-app/components/one-way-input", ["exports", "ember-one-way-controls/components/one-way-input"], function (_exports, _oneWayInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayInput.default;
    }
  });
});
;define("to-do-app/components/one-way-month", ["exports", "ember-one-way-controls/components/one-way-month"], function (_exports, _oneWayMonth) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayMonth.default;
    }
  });
});
;define("to-do-app/components/one-way-number", ["exports", "ember-one-way-controls/components/one-way-number"], function (_exports, _oneWayNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayNumber.default;
    }
  });
});
;define("to-do-app/components/one-way-password", ["exports", "ember-one-way-controls/components/one-way-password"], function (_exports, _oneWayPassword) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayPassword.default;
    }
  });
});
;define("to-do-app/components/one-way-radio", ["exports", "ember-one-way-controls/components/one-way-radio"], function (_exports, _oneWayRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayRadio.default;
    }
  });
});
;define("to-do-app/components/one-way-range", ["exports", "ember-one-way-controls/components/one-way-range"], function (_exports, _oneWayRange) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayRange.default;
    }
  });
});
;define("to-do-app/components/one-way-search", ["exports", "ember-one-way-controls/components/one-way-search"], function (_exports, _oneWaySearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWaySearch.default;
    }
  });
});
;define("to-do-app/components/one-way-select", ["exports", "ember-one-way-controls/components/one-way-select"], function (_exports, _oneWaySelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWaySelect.default;
    }
  });
});
;define("to-do-app/components/one-way-select/option", ["exports", "ember-one-way-controls/components/one-way-select/option"], function (_exports, _option) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _option.default;
    }
  });
});
;define("to-do-app/components/one-way-tel", ["exports", "ember-one-way-controls/components/one-way-tel"], function (_exports, _oneWayTel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayTel.default;
    }
  });
});
;define("to-do-app/components/one-way-text", ["exports", "ember-one-way-controls/components/one-way-text"], function (_exports, _oneWayText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayText.default;
    }
  });
});
;define("to-do-app/components/one-way-textarea", ["exports", "ember-one-way-controls/components/one-way-textarea"], function (_exports, _oneWayTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayTextarea.default;
    }
  });
});
;define("to-do-app/components/one-way-time", ["exports", "ember-one-way-controls/components/one-way-time"], function (_exports, _oneWayTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayTime.default;
    }
  });
});
;define("to-do-app/components/one-way-url", ["exports", "ember-one-way-controls/components/one-way-url"], function (_exports, _oneWayUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayUrl.default;
    }
  });
});
;define("to-do-app/components/one-way-week", ["exports", "ember-one-way-controls/components/one-way-week"], function (_exports, _oneWayWeek) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _oneWayWeek.default;
    }
  });
});
;define("to-do-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("to-do-app/controllers/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // eslint-disable-next-line ember/new-module-imports
    task: Ember.computed.alias('model')
  });

  _exports.default = _default;
});
;define("to-do-app/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    /*
     current: '',
     // eslint-disable-next-line no-undef
    completed: Ember.computed( 'model', 'current', function() {
      var tasks = this.get('model');
      var current = this.get('current');
       //let finished = current === 'complete';
      //let unfinished = current === 'incomplete';
       if (finished) {
        return tasks.filter((task) => {
          return task.get('isCompleted') === true;
        });
      }
       if (unfinished) {
        return tasks.filter((task) => {
          return task.get('isCompleted') === false;
        });
      }
      // eslint-disable-next-line no-undef
      return tasks;
    }),*/
    actions: {
      showTask(status) {
        isCompleted: false; //var tasks = this.get('model');


        const model = this.get('model');
        let newFetchModel = this.get('store').findAll('task');
        this.set('model', newFetchModel);

        if (status === 'true') {
          let newFetchModel = this.get('store').findAll('task');
          this.set('model', newFetchModel);
          let newModelValue = model.filter(task => {
            return task.get('isCompleted') === true;
          });
          this.set('model', newModelValue);
        } else if (status === 'false') {
          // eslint-disable-next-line no-redeclare
          let newFetchModel = this.get('store').findAll('task');
          this.set('model', newFetchModel);
          let newModelValue = model.filter(task => {
            return task.get('isCompleted') === false;
          });
          this.set('model', newModelValue);
        } // eslint-disable-next-line no-undef
        //return tasks;

      },

      markComplete(task) {
        // this.get('store').findRecord('post', task.id).then(function(post) {
        //   post.set('isComplete', true);
        //   post.save();
        // });
        task.get('isComplete') === 'Incomplete' ? task.set('isComplete', 'Completed') : task.set('isComplete', 'Incomplete');
      },

      editTask(task) {
        this.transitionToRoute('edit', task.get('id'));
      }

    }
  });

  _exports.default = _default;
});
;define("to-do-app/helpers/app-version", ["exports", "to-do-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("to-do-app/helpers/one-way-select/contains", ["exports", "ember-one-way-controls/helpers/one-way-select/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define("to-do-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("to-do-app/helpers/route-action", ["exports", "ember-route-action-helper/helpers/route-action"], function (_exports, _routeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
;define("to-do-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("to-do-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "to-do-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("to-do-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("to-do-app/initializers/ember-cli-mirage", ["exports", "to-do-app/config/environment", "to-do-app/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("to-do-app/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("to-do-app/initializers/export-application-global", ["exports", "to-do-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("to-do-app/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("to-do-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("to-do-app/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    this.resource('task'); // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
    */
  }
});
;define("to-do-app/mirage/fixtures/tasks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = [{
    id: '1',
    description: '@ mention feature',
    deadline: 'Feb 25',
    isCompleted: false
  }, {
    id: '2',
    description: 'Finish passport application',
    deadline: 'march 29',
    isCompleted: false
  }, {
    id: '3',
    description: 'Do groceries',
    deadline: 'None',
    isCompleted: false
  }, {
    id: '4',
    description: 'Laundry',
    deadline: 'ASAP',
    isCompleted: false
  }, {
    id: '5',
    description: 'school',
    deadline: 'ASAP',
    isCompleted: false
  }];
  _exports.default = _default;
});
;define("to-do-app/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(server) {
    server.loadFixtures('tasks');
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */
    // server.createList('post', 10);
  }
});
;define("to-do-app/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("to-do-app/models/task", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    description: _emberData.default.attr('string'),
    deadline: _emberData.default.attr('string'),
    isCompleted: _emberData.default.attr('boolean', {
      defaultValue: false
    })
  });

  _exports.default = _default;
});
;define("to-do-app/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("to-do-app/router", ["exports", "to-do-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('edit', {
      path: 'edit/:id'
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("to-do-app/routes/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      let task = this.store.find('task', params.id);
      return task;
    },

    actions: {
      saveEdit(model, description, deadline) {
        model.setProperties({
          description,
          deadline
        });
        model.save().then(() => this.transitionTo('application'));
      }

    }
  });

  _exports.default = _default;
});
;define("to-do-app/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('task');
    },

    actions: {
      save(description, deadline) {
        this.get('store').createRecord('task', {
          description,
          deadline
        }).save();
      },

      delete(task) {
        task.deleteRecord();
        task.save();
      },

      toggleTask(task) {
        let isCompleted = task.get('isCompleted');
        task.set('isCompleted', !isCompleted);
        task.save();
      }

    }
  });

  _exports.default = _default;
});
;define("to-do-app/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("to-do-app/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yJkcPyiA",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "to-do-app/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("to-do-app/templates/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QF2A1c2E",
    "block": "{\"symbols\":[],\"statements\":[[7,\"br\",true],[8],[9],[7,\"center\",true],[10,\"style\",\"font-size:28px;\"],[8],[0,\"Edit Task \"],[1,[24,[\"task\",\"id\"]],false],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n  \"],[7,\"form\",true],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n      Due: \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"deadline\"]],[24,[\"task\",\"deadline\"]]]]],false],[0,\"\\n      Task description: \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"description\"]],[24,[\"task\",\"description\"]]]]],false],[0,\"\\n      \"],[7,\"button\",false],[12,\"type\",\"submit\"],[3,\"action\",[[23,0,[]],\"saveEdit\",[24,[\"task\"]],[24,[\"description\"]],[24,[\"deadline\"]]]],[8],[0,\"Save\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "to-do-app/templates/edit.hbs"
    }
  });

  _exports.default = _default;
});
;define("to-do-app/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TBhuGN7t",
    "block": "{\"symbols\":[\"task\"],\"statements\":[[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"center\",true],[10,\"style\",\"font-size:36px;\"],[8],[0,\"To Do List\"],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[7,\"form\",true],[8],[0,\"\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n       Task description: \"],[1,[28,\"input\",null,[[\"value\"],[[24,[\"description\"]]]]],false],[0,\"\\n       Due: \"],[1,[28,\"input\",null,[[\"value\"],[[24,[\"deadline\"]]]]],false],[0,\"\\n       \"],[7,\"button\",false],[12,\"type\",\"submit\"],[3,\"action\",[[23,0,[]],[28,\"route-action\",[\"save\",[24,[\"description\"]],[24,[\"deadline\"]]],null]]],[8],[0,\" Save\"],[9],[0,\"\\n       \"],[7,\"br\",true],[8],[9],[0,\"\\n \"],[9],[0,\"\\n \"],[7,\"br\",true],[8],[9],[0,\"\\n\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[7,\"button\",false],[12,\"style\",\"color:red;\"],[3,\"action\",[[23,0,[]],\"showTask\",\"all\"]],[8],[0,\"All\"],[9],[0,\"\\n  \"],[7,\"button\",false],[12,\"style\",\"color:red;\"],[3,\"action\",[[23,0,[]],\"showTask\",\"true\"]],[8],[0,\"Completed\"],[9],[0,\"\\n  \"],[7,\"button\",false],[12,\"style\",\"color:red;\"],[3,\"action\",[[23,0,[]],\"showTask\",\"false\"]],[8],[0,\"Incomplete\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\\n\\n\\n\"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"list-group\"],[8],[0,\"\\n   \\n\"],[4,\"each\",[[24,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"list-group-item col-md-8\"],[8],[0,\"\\n           \"],[7,\"table\",true],[8],[0,\"\\n          \"],[7,\"tr\",true],[8],[0,\"\\n            \"],[7,\"th\",true],[8],[0,\"Check\"],[9],[0,\"\\n            \"],[7,\"th\",true],[8],[0,\"To-Do No\"],[9],[0,\"\\n            \"],[7,\"th\",true],[8],[0,\"Description\"],[9],[0,\"\\n            \"],[7,\"th\",true],[8],[0,\"Due Date\"],[9],[0,\"\\n            \"],[7,\"th\",true],[8],[0,\"isCompleted \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[7,\"tr\",true],[8],[0,\"\\n           \"],[7,\"td\",true],[8],[7,\"center\",true],[8],[0,\" \"],[1,[28,\"one-way-checkbox\",null,[[\"checked\",\"update\"],[[23,1,[\"isCompleted\"]],[28,\"action\",[[23,0,[]],[28,\"route-action\",[\"toggleTask\",[23,1,[]]],null]],null]]]],false],[9],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[7,\"center\",true],[8],[7,\"strong\",true],[8],[1,[23,1,[\"id\"]],false],[9],[9],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[1,[23,1,[\"description\"]],false],[9],[0,\"\\n         \"],[7,\"td\",true],[8],[0,\" \"],[1,[23,1,[\"deadline\"]],false],[9],[0,\" \\n         \"],[7,\"td\",true],[8],[7,\"center\",true],[8],[1,[23,1,[\"isCompleted\"]],false],[9],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-md-4\"],[8],[0,\"\\n            \"],[7,\"button\",false],[12,\"style\",\"color:blue;\"],[3,\"action\",[[23,0,[]],\"editTask\",[23,1,[]]]],[8],[0,\" Edit\"],[9],[0,\"\\n            \"],[7,\"button\",false],[12,\"style\",\"color:blue;\"],[3,\"action\",[[23,0,[]],\"delete\",[23,1,[]]]],[8],[0,\" Remove\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"br\",true],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"   \\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"container row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n    \"],[1,[22,\"outlet\"],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "to-do-app/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("to-do-app/tests/mirage/mirage.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | mirage');
  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/fixtures/tasks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/tasks.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
;

;define('to-do-app/config/environment', [], function() {
  var prefix = 'to-do-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("to-do-app/app")["default"].create({"name":"to-do-app","version":"0.0.0+4ef815f7"});
          }
        
//# sourceMappingURL=to-do-app.map
