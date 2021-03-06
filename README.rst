Simple starter project for static web development, jQuery and Bootstrap are downloaded with Bower. Project files are optimized with Grunt. Browser tab is refreshed automaticaly with LiveReload.

Prerequisite
------------

* `Bower <https://github.com/bower/bower>`_
* `Grunt <http://gruntjs.com/getting-started>`_
* `LiveReload Browser extension <http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions->`_

Bower And Grunt need :

* `NodeJS <http://nodejs.org/>`_
* `npm <http://npmjs.org/>`_


Installing Bower
^^^^^^^^^^^^^^^^

Bower is installed globally using npm:.

::

    $ npm install -g bower


Installing Grunt
^^^^^^^^^^^^^^^^

Install Grunt's command line interface (CLI). Grunt will be only installed in your project folder.

::

    $ npm install -g grunt-cli


Installing project-bootstrap
----------------------------

Checkout the project.

::

    $ git clone https://github.com/k3z/project-bootstrap.git


Run Bower to download dependencies

::

    $ cd <project-root>/
    $ bower install


Bower components are now in www/assets/components/


Run Grunt to initialize project

::

    $ cd <project-root>/
    $ npm install
    $ grunt


Development files are now in www/assets/build/.

To get production files run:

::

    $ grunt production


Bower Components
----------------

You can add more components in bower.json config file.

::

    {
        "name": "project bootstrap",
        "dependencies": {
            "jquery": "1.8.x",
            "components-bootstrap": "2.3.x",
            "font-awesome": "3.0.2"
        }
    }


Grunt watch & LiveReload
------------------------

Grunt can observe you files and execute somme tasks automaticaly.

To run Grunt in background

::

    $ grunt watch


LiveReload
^^^^^^^^^^

Grunt Watch has support for Livereload. To enable it in your browser install `LiveReload extension <http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions->`_
