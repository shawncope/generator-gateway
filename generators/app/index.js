'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var yosay = require('yosay');

var GatewayGenerator = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();

    // this prompt is not being used. In the future we should make use of fs.copyTpl to use project name for JS namespacing
    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name?'
    }
    /*
    // this is for future use since something like assemble.io would be awesome in this project
    ,{
      type: 'confirm',
      name: 'useAssemble',
      message: 'Would you like to use assemble?',
      default: true
    }*/
    ];

    this.prompt(prompts, function(props) {
      this.appName = props.appName;
      this.useAssemble = props.useAssemble;

      done();
    }.bind(this));
  },

  scaffoldFolders: function(){
    mkdirp('files');
    mkdirp('provision');
    mkdirp('src/images');
    mkdirp('src/js/mods');
    mkdirp('src/js/vendor');
    mkdirp('src/scss/base');
    mkdirp('src/scss/components');
    mkdirp('src/scss/layout');
    mkdirp('src/scss/mods');
    mkdirp('src/scss/sections');
  },

  copyMainFiles: function() {
    //todo: will need to at least template some of these files. would be more efficient to just copy full directories recurrsively, but apparently this is frowned upon
    this.fs.copy(
      this.templatePath('_base.scss'),
      this.destinationPath('src/scss/base/_base.scss')
    );
    this.fs.copy(
      this.templatePath('_buttons.scss'),
      this.destinationPath('src/scss/components/_buttons.scss')
    );
    this.fs.copy(
      this.templatePath('_footer.scss'),
      this.destinationPath('src/scss/mods/_footer.scss')
    );
    this.fs.copy(
      this.templatePath('_forms.scss'),
      this.destinationPath('src/scss/components/_forms.scss')
    );
    this.fs.copy(
      this.templatePath('_full-bleed.scss'),
      this.destinationPath('src/scss/sections/_full-bleed.scss')
    );
    this.fs.copy(
      this.templatePath('_grid.scss'),
      this.destinationPath('src/scss/layout/_grid.scss')
    );
    this.fs.copy(
      this.templatePath('_links.scss'),
      this.destinationPath('src/scss/components/_links.scss')
    );
    this.fs.copy(
      this.templatePath('_settings.scss'),
      this.destinationPath('src/scss/_settings.scss')
    );
    this.fs.copy(
      this.templatePath('_tables.scss'),
      this.destinationPath('src/scss/components/_tables.scss')
    );
    this.fs.copy(
      this.templatePath('_typography.scss'),
      this.destinationPath('src/scss/base/_typography.scss')
    );
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );
    this.fs.copy(
      this.templatePath('Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html')
    );
    this.fs.copy(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE')
    );
    this.fs.copy(
      this.templatePath('macros.conf'),
      this.destinationPath('files/macros.conf')
    );
    this.fs.copy(
      this.templatePath('main.js'),
      this.destinationPath('js/main.js')
    );
    this.fs.copy(
      this.templatePath('modernizr.min.js'),
      this.destinationPath('js/vendor/modernizr.min.js')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(
      this.templatePath('styles.scss'),
      this.destinationPath('scss/styles.scss')
    );
    this.fs.copy(
      this.templatePath('Vagrantfile'),
      this.destinationPath('Vagrantfile')
    );
    this.fs.copy(
      this.templatePath('vhost.conf'),
      this.destinationPath('files/vhost.conf')
    );
    this.fs.copy(
      this.templatePath('xdebug.ini'),
      this.destinationPath('files/xdebug.ini')
    );
  },

  installNpmAndBower: function() {
    this.installDependencies();
  },

  end: function() {
    var messageInstallationComplete =
      chalk.bgGreen('\n\n npm install and bower install have completed\n') +
      chalk.blue('\n\nAt this point you are set up and ready to go. You have the option of starting vagrant by running \'vagrant up\'. Checkout https://github.com/FindawayWorld/gateway for more info on the Gateway Boilerplate\n\n')
    ;
    console.log(messageInstallationComplete);
  }

});

module.exports = GatewayGenerator;
