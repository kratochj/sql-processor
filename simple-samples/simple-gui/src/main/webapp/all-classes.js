/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-03-11 22:33:40 (aed16176e68b5e8aa1433452b12805c0ad913836)
*/
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-03-11 22:33:40 (aed16176e68b5e8aa1433452b12805c0ad913836)
*/
Ext.define("ExtThemeNeptune.Component",{override:"Ext.Component",initComponent:function(){this.callParent();if(this.dock&&this.border===undefined){this.border=false}},initStyles:function(){var b=this,a=b.border;if(b.dock){b.border=null}b.callParent(arguments);b.border=a}});Ext.define("ExtThemeNeptune.container.ButtonGroup",{override:"Ext.container.ButtonGroup",usePlainButtons:false});Ext.define("ExtThemeNeptune.form.field.HtmlEditor",{override:"Ext.form.field.HtmlEditor",defaultButtonUI:"plain-toolbar"});Ext.define("ExtThemeNeptune.grid.RowEditor",{override:"Ext.grid.RowEditor",buttonUI:"default-toolbar"});Ext.define("ExtThemeNeptune.layout.component.Dock",{override:"Ext.layout.component.Dock",noBorderClassTable:[0,Ext.baseCSSPrefix+"noborder-l",Ext.baseCSSPrefix+"noborder-b",Ext.baseCSSPrefix+"noborder-bl",Ext.baseCSSPrefix+"noborder-r",Ext.baseCSSPrefix+"noborder-rl",Ext.baseCSSPrefix+"noborder-rb",Ext.baseCSSPrefix+"noborder-rbl",Ext.baseCSSPrefix+"noborder-t",Ext.baseCSSPrefix+"noborder-tl",Ext.baseCSSPrefix+"noborder-tb",Ext.baseCSSPrefix+"noborder-tbl",Ext.baseCSSPrefix+"noborder-tr",Ext.baseCSSPrefix+"noborder-trl",Ext.baseCSSPrefix+"noborder-trb",Ext.baseCSSPrefix+"noborder-trbl"],edgeMasks:{top:8,right:4,bottom:2,left:1},handleItemBorders:function(){var y=this,f=0,z=8,A=4,l=2,e=1,a=y.owner,s=a.bodyBorder,n=a.border,j=y.collapsed,p=y.edgeMasks,k=y.noBorderClassTable,x=a.dockedItems.generation,w,d,v,h,r,m,u,o,g,q,t,c;if(y.initializedBorders===x){return}t=[];c=[];d=y.getBorderCollapseTable();k=y.getBorderClassTable?y.getBorderClassTable():k;y.initializedBorders=x;y.collapsed=false;v=y.getDockedItems();y.collapsed=j;for(r=0,m=v.length;r<m;r++){u=v[r];if(u.ignoreBorderManagement){continue}o=u.dock;q=h=0;t.length=0;c.length=0;if(o!=="bottom"){if(f&z){w=u.border}else{w=n;if(w!==false){h+=z}}if(w===false){q+=z}}if(o!=="left"){if(f&A){w=u.border}else{w=n;if(w!==false){h+=A}}if(w===false){q+=A}}if(o!=="top"){if(f&l){w=u.border}else{w=n;if(w!==false){h+=l}}if(w===false){q+=l}}if(o!=="right"){if(f&e){w=u.border}else{w=n;if(w!==false){h+=e}}if(w===false){q+=e}}if((g=u.lastBorderMask)!==q){u.lastBorderMask=q;if(g){c[0]=k[g]}if(q){t[0]=k[q]}}if((g=u.lastBorderCollapse)!==h){u.lastBorderCollapse=h;if(g){c[c.length]=d[g]}if(h){t[t.length]=d[h]}}if(c.length){u.removeCls(c)}if(t.length){u.addCls(t)}f|=p[o]}q=h=0;t.length=0;c.length=0;if(f&z){w=s}else{w=n;if(w!==false){h+=z}}if(w===false){q+=z}if(f&A){w=s}else{w=n;if(w!==false){h+=A}}if(w===false){q+=A}if(f&l){w=s}else{w=n;if(w!==false){h+=l}}if(w===false){q+=l}if(f&e){w=s}else{w=n;if(w!==false){h+=e}}if(w===false){q+=e}if((g=y.lastBodyBorderMask)!==q){y.lastBodyBorderMask=q;if(g){c[0]=k[g]}if(q){t[0]=k[q]}}if((g=y.lastBodyBorderCollapse)!==h){y.lastBodyBorderCollapse=h;if(g){c[c.length]=d[g]}if(h){t[t.length]=d[h]}}if(c.length){a.removeBodyCls(c)}if(t.length){a.addBodyCls(t)}},onRemove:function(b){var a=b.lastBorderMask;if(!b.isDestroyed&&!b.ignoreBorderManagement&&a){b.lastBorderMask=0;b.removeCls(this.noBorderClassTable[a])}this.callParent([b])}});Ext.define("ExtThemeNeptune.menu.Menu",{override:"Ext.menu.Menu",showSeparator:false});Ext.define("ExtThemeNeptune.menu.Separator",{override:"Ext.menu.Separator",border:true});Ext.define("ExtThemeNeptune.panel.Panel",{override:"Ext.panel.Panel",border:false,bodyBorder:false,initBorderProps:Ext.emptyFn,initBodyBorder:function(){if(this.bodyBorder!==true){this.callParent()}}});Ext.define("ExtThemeNeptune.panel.Table",{override:"Ext.panel.Table",bodyBorder:true});Ext.define("ExtThemeNeptune.panel.Tool",{override:"Ext.panel.Tool",height:16,width:16});Ext.define("ExtThemeNeptune.picker.Month",{override:"Ext.picker.Month",measureMaxHeight:36});Ext.define("ExtThemeNeptune.resizer.Splitter",{override:"Ext.resizer.Splitter",size:8});Ext.define("ExtThemeNeptune.tab.Tab",{override:"Ext.tab.Tab",border:false});Ext.define("ExtThemeNeptune.toolbar.Paging",{override:"Ext.toolbar.Paging",defaultButtonUI:"plain-toolbar"});Ext.define("ExtThemeNeptune.toolbar.Toolbar",{override:"Ext.toolbar.Toolbar",usePlainButtons:false,border:false});Ext.ns('Ext.app');

Ext.app.REMOTING_API = {
  "url" : "http://simple-backend.cfapps.io/router",
  "type" : "remoting",
  "actions" : {
    "authWeb" : [ {
      "name" : "loadAuthRoles",
      "len" : 1
    }, {
      "name" : "createUserRole",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "loadAuthUsers",
      "len" : 1
    }, {
      "name" : "deleteUserRole",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "createAuthRole",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "createAuthUser",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "updateAuthUser",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "deleteAuthRole",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "updateAuthRole",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "loadUserRoles",
      "len" : 1
    }, {
      "name" : "deleteAuthUser",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "updateUserRole",
      "len" : 0,
      "formHandler" : true
    } ],
    "personWeb" : [ {
      "name" : "updateRelative",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "createContact",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "loadContacts",
      "len" : 1
    }, {
      "name" : "loadCountries",
      "len" : 1
    }, {
      "name" : "createPerson",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "updatePerson",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "createRelative",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "loadPeople",
      "len" : 1
    }, {
      "name" : "deleteRelative",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "deleteContact",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "updateContact",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "deletePerson",
      "len" : 0,
      "formHandler" : true
    }, {
      "name" : "loadRelatives",
      "len" : 1
    } ]
  }
};

try {
    Ext.require("Ext.direct.*", function() {
        Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
        Ext.direct.Manager.on("exception", function(exception) {
            console.error(exception.message);
            Ext.Msg.alert("Error", exception.message);
        });
    });
}
catch (error) {
    console.error(error);
}

Ext.define('Simplereg.view.override.PersonList', {
    override: 'Simplereg.view.PersonList'

});
/*
 * File: app/view/PersonList.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.PersonList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.personlist',

    requires: [
        'Simplereg.view.override.PersonList'
    ],

    frame: true,
    itemId: 'people',
    title: 'People',
    store: 'People',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'open',
                            iconCls: 'icon-page',
                            text: 'Open'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'People'
                }
            ],
            columns: [
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    sortable: false,
                    dataIndex: 'id',
                    text: 'Id',
                    flex: 1,
                    format: '0'
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    sortable: false,
                    dataIndex: 'version',
                    text: 'Version',
                    flex: 1,
                    format: '0'
                },
                {
                    xtype: 'gridcolumn',
                    sortable: false,
                    dataIndex: 'firstName',
                    text: 'First Name',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lastName',
                    text: 'Last Name',
                    flex: 2
                },
                {
                    xtype: 'datecolumn',
                    sortable: false,
                    dataIndex: 'dateOfBirth',
                    text: 'Date of Birth',
                    flex: 2,
                    format: 'd.m.Y'
                },
                {
                    xtype: 'gridcolumn',
                    sortable: false,
                    dataIndex: 'ssn',
                    text: 'SSN',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    sortable: false,
                    dataIndex: 'gender',
                    text: 'Gender',
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.PersonSelect", {
    override: "Simplereg.view.PersonSelect",

    init: function() {
        var me = this;

        me.loadMask = Ext.create("Ext.LoadMask", {
            autoShow: false,
            msg: "Loading...",
            target: me
        });

        // Person select
        me.id = "PersonSelect";
        me.itemId = "person-select";

        // Person list
    },

    /**
     * Reload person select
     */
    reload: function(config) {
        var me = this, store = me.down("#people").store;

//TODO: disable grid loading mask
        //me.loadMask.show();
        me.mask();

        // From beginning
        if (config === true) {
            config = { page: 1, start: 0 };
            store.currentPage = 1;
        }

        // Load person select list
        store.load(Ext.apply({
            callback: function(records, operation, success) {
                if (success) {
                    me.down("grid").down("pagingtoolbar").onLoad();
                }
                //me.loadMask.hide();
                me.unmask();
            }
        }, config));
    },

    /**
     * Search people
     */
    search: function(params) {
        var me = this, store = me.down("#people").store;

        // Person selection
        Ext.getCmp("pages").setActiveTab(me);

        // Search parameters
        store.proxy.extraParams = params;

        // Reload from beginning
        me.reload(true);
    }
});
/*
 * File: app/view/PersonSelect.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.PersonSelect', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.personselect',

    requires: [
        'Simplereg.view.PersonList',
        'Simplereg.view.override.PersonSelect'
    ],

    id: 'person-select',
    bodyPadding: 5,
    header: false,
    title: 'Person Select',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    cls: 'thick',
                    items: [
                        {
                            xtype: 'splitbutton',
                            itemId: 'search-person',
                            iconCls: 'icon-search',
                            text: 'Find',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'search-all-people',
                                        text: 'Clear Filter'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'reload',
                            iconCls: 'icon-refresh',
                            text: 'Refresh'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'create-person',
                            iconCls: 'icon-add',
                            text: 'Add'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'close-all',
                            iconCls: 'icon-page-close',
                            text: 'Close All'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'personlist',
                    margin: 5
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.Page", {
    override: "Simplereg.view.Page",

    init: function() {
        var me = this;

        // Dialogs...
        this.dialogs([
            "Simplereg.view.PersonSearch",
            "Simplereg.view.PersonCreate",
            "Simplereg.view.PersonUpdate",
            "Simplereg.view.PersonDelete",
            "Simplereg.view.RelativeCreate",
            "Simplereg.view.RelativeUpdate",
            "Simplereg.view.RelativeDelete",
            "Simplereg.view.ContactCreate",
            "Simplereg.view.ContactUpdate",
            "Simplereg.view.ContactDelete"
        ]);

        // Open windows (dialogs)
        me.windows = [];

        // Keyboard control
        new Ext.KeyMap(document, [
            {
                key: Ext.EventObject.F3,
                fn: function(keyCode, event) {
                    event.stopEvent();
                    var window = this.getWindow();
                    if (!window || window == Ext.getCmp("relative-create")) {
                        Ext.getCmp("person-search").show();
                    }
                },
                scope: me
            },
            {
                key: Ext.EventObject.F5,
                fn: function(keyCode, event) {
                    event.stopEvent();
                    if (!this.getWindow()) {
                        this.reload();
                    }
                },
                scope: me
            }
        ]);
    },

    /**
     * Get last opened window (dialog)
     */
    getWindow: function(selector) {
        var window = this.windows[this.windows.length - 1];
        return window && selector ? window.is(selector) : window;
    },

    /**
     * Create application dialogs
     */
    dialogs: function(types) {
        for (var i in types) {
            var dialog = Ext.create(types[i]);
            dialog.loadMask = Ext.create("Ext.LoadMask", {
                autoShow: false,
                msg: "Processing...",
                target: dialog
            });
        }
    },

    /**
     * Reload page (active view)
     */
    reload: function() {
        var me = this, view = Ext.getCmp("pages").getActiveTab();
        if (view && view.reload) {
            view.reload();
        }
    },

    /**
     * Find person detail
     * (by id)
     */
    findPersonDetail: function(id) {
        var pages = Ext.getCmp("pages");
        return pages.child("#person" + id + "-detail");
    },

    /**
     * Reload person detail
     */
    reloadPersonDetail: function(id) {
        var view = this.findPersonDetail(id);
        if (view) {
            view.reload();
        }
    },

    /**
     * Open person detail (new page item)
     */
    openPersonDetail: function(id, record) {
        var view = this.findPersonDetail(id),
                pages = Ext.getCmp("pages");

        // New person detail
        if (!view) {
            view = Ext.create("Simplereg.view.PersonDetail");
            view.init(id, record);

            // Detail tab...
            //pages.add(view);
            var index = pages.items.indexOf(pages.getActiveTab()) + 1;
            pages.insert(index, view);
            pages.setActiveTab(view);
        }

        // Existing...
        else {
            pages.setActiveTab(view);
        }
    },

    /**
     * Close person detail
     */
    closePersonDetail: function(id) {
        var view = this.findPersonDetail(id),
                pages = Ext.getCmp("pages");
        if (view) {
            pages.remove(view);
        }
    },

    /**
     * Close tab...
     */
    closeActive: function() {
        var pages = Ext.getCmp("pages"),
                view = pages.getActiveTab();
        if (view.is("persondetail")) {
            pages.remove(view);
        }
    },

    closeAll: function(active) {
        var pages = Ext.getCmp("pages"), items = pages.items.getRange(),
                view = pages.getActiveTab();
        for (var i in items) {
            if (items[i].is("persondetail")) {
                if (active || view != items[i]) {
                    pages.remove(items[i]);
                }
            }
        }
    }
});
/*
 * File: app/view/Page.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.Page', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Simplereg.view.PersonSelect',
        'Simplereg.view.override.Page'
    ],

    id: 'page',
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    id: 'pages',
                    header: false,
                    title: 'Person Registry',
                    activeTab: 0,
                    plain: true,
                    items: [
                        {
                            xtype: 'personselect'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});/*
 * File: app/view/Viewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.Viewport', {
    extend: 'Simplereg.view.Page',
    renderTo: Ext.getBody()
});/*
 * File: app/model/PersonIdentity.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.model.PersonIdentity', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'personId',
            type: 'int'
        },
        {
            name: 'version',
            type: 'int'
        }
    ]
});/*
 * File: app/model/Person.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.model.Person', {
    extend: 'Ext.data.Model',

    uses: [
        'Simplereg.model.Relative',
        'Simplereg.model.Contact'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'version',
            type: 'int'
        },
        {
            convert: function(v, rec) {
                return Simplereg.getPersonTitle(rec);
            },
            name: 'title',
            type: 'string'
        },
        {
            name: 'firstName',
            type: 'string'
        },
        {
            name: 'lastName',
            type: 'string'
        },
        {
            dateFormat: 'd.m.Y',
            name: 'dateOfBirth',
            type: 'date'
        },
        {
            name: 'ssn',
            type: 'string'
        },
        {
            name: 'gender',
            type: 'string'
        }
    ],

    hasMany: [
        {
            associationKey: 'relatives',
            model: 'Simplereg.model.Relative',
            foreignKey: 'personId',
            name: 'relatives'
        },
        {
            associationKey: 'contacts',
            model: 'Simplereg.model.Contact',
            foreignKey: 'personId',
            name: 'contacts'
        }
    ]
});/*
 * File: app/model/Relative.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.model.Relative', {
    extend: 'Ext.data.Model',

    uses: [
        'Simplereg.model.Person'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'personId',
            type: 'int'
        },
        {
            name: 'version',
            type: 'int'
        },
        {
            name: 'rtype',
            type: 'string'
        },
        {
            name: 'relPerson.id',
            type: 'int'
        },
        {
            convert: function(v, rec) {
                return Simplereg.getPersonTitle(rec, "relPerson.");
            },
            name: 'relPerson.title',
            type: 'string'
        },
        {
            name: 'relPerson.firstName',
            type: 'string'
        },
        {
            name: 'relPerson.lastName',
            type: 'string'
        },
        {
            name: 'relPerson.dateOfBirth',
            type: 'date'
        },
        {
            name: 'relPerson.ssn',
            type: 'string'
        },
        {
            name: 'relPerson.gender',
            type: 'string'
        }
    ],

    belongsTo: {
        associationKey: 'person',
        model: 'Simplereg.model.Person',
        foreignKey: 'personId'
    },

    hasOne: {
        associationKey: 'relPerson',
        model: 'Simplereg.model.Person',
        foreignKey: 'relPerson.id'
    }
});/*
 * File: app/model/Contact.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.model.Contact', {
    extend: 'Ext.data.Model',

    uses: [
        'Simplereg.model.Person'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'version',
            type: 'int'
        },
        {
            name: 'personId',
            type: 'int'
        },
        {
            name: 'ctype',
            type: 'string'
        },
        {
            convert: function(v, rec) {
                return Simplereg.getContactTitle(rec);
            },
            name: 'title',
            type: 'string'
        },
        {
            name: 'countryCode',
            type: 'string'
        },
        {
            name: 'address',
            type: 'string'
        },
        {
            name: 'phoneNumber',
            type: 'string'
        }
    ],

    belongsTo: {
        associationKey: 'person',
        model: 'Simplereg.model.Person',
        foreignKey: 'personId'
    }
});/*
 * File: app/store/Genders.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.Genders', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'Genders',
            data: [
                {
                    value: 'MALE',
                    name: 'MALE'
                },
                {
                    value: 'FEMALE',
                    name: 'FEMALE'
                },
                {
                    value: 'UNKNOWN',
                    name: 'UNKNOWN'
                }
            ],
            fields: [
                {
                    name: 'value'
                },
                {
                    name: 'name'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/QueryPeople.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.QueryPeople', {
    extend : 'Ext.data.Store',

    requires : [ 'Simplereg.model.Person' ],

    constructor : function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([ Ext.apply({
            model : 'Simplereg.model.Person',
            remoteFilter : true,
            remoteSort : true,
            storeId : 'QueryPeople',
            pageSize : 5,
            proxy : {
                type : 'direct',
                api : {
                    read : "personWeb.loadPeople"
                },
                reader : {
                    type : 'json',
                    root : 'records'
                }
            },
            sorters : {
                property : 'lastName'
            }
        }, cfg) ]);
    }
});/*
 * File: app/store/People.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.People', {
    extend : 'Ext.data.Store',

    requires : [ 'Simplereg.model.Person' ],

    constructor : function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([ Ext.apply({
            model : 'Simplereg.model.Person',
            remoteFilter : true,
            remoteSort : true,
            storeId : 'People',
            pageSize : 5,
            proxy : {
                type : 'direct',
                api : {
                    read : "personWeb.loadPeople"
                },
                reader : {
                    type : 'json',
                    root : 'records'
                }
            },
            listeners : {
                load : {
                    fn : me.fitin,
                    scope : me
                }
            },
            sorters : {
                property : 'lastName'
            }
        }, cfg) ]);
    },

    fitin : function(store, records, successful, eOpts) {
        if (store.currentPage > 1 && !records.length) {
            store.previousPage();
        }
    }

});/*
 * File: app/store/Relatives.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.Relatives', {
    extend : 'Ext.data.Store',

    requires : [ 'Simplereg.model.Relative' ],

    constructor : function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([ Ext.apply({
            model : 'Simplereg.model.Relative',
            storeId : 'Relatives',
            proxy : {
                type : 'direct',
                api : {
                    read : "personWeb.loadRelatives"
                },
                reader : {
                    type : 'json',
                    root : 'records'
                }
            },
            sorters : {
                property : 'relPerson.lastName'
            }
        }, cfg) ]);
    }
});/*
 * File: app/store/RelativeTypes.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.RelativeTypes', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'RelativeTypes',
            data: [
                {
                    value: 'FATHER',
                    name: 'FATHER'
                },
                {
                    value: 'MOTHER',
                    name: 'MOTHER'
                },
                {
                    value: 'SON',
                    name: 'SON'
                },
                {
                    value: 'DAUGHTER',
                    name: 'DAUGHTER'
                },
                {
                    value: 'HUSBAND',
                    name: 'HUSBAND'
                },
                {
                    value: 'WIFE',
                    name: 'WIFE'
                },
                {
                    value: 'BROTHER',
                    name: 'BROTHER'
                },
                {
                    value: 'SISTER',
                    name: 'SISTER'
                }
            ],
            fields: [
                {
                    name: 'value'
                },
                {
                    name: 'name'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/Contacts.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.Contacts', {
    extend: 'Ext.data.Store',

    requires: [
        'Simplereg.model.Contact'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Simplereg.model.Contact',
            storeId: 'Contacts',
            sorters: {
                property: 'address'
            },
            proxy: {
                type: 'direct',
                api: { read: "personWeb.loadContacts" },
                reader: {
                    type: 'json',
                    root: 'records'
                }
            }
        }, cfg)]);
    }
});/*
 * File: app/model/Country.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.model.Country', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            convert: function(v, rec) {
                return rec.data.name + "(" + rec.data.code + ")";
            },
            name: 'title',
            type: 'string'
        },
        {
            name: 'code',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        }
    ]
});/*
 * File: app/store/ContactTypes.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.ContactTypes', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'ContactTypes',
            data: [
                {
                    value: 'HOME',
                    name: 'HOME'
                },
                {
                    value: 'BUSINESS',
                    name: 'BUSINESS'
                },
                {
                    value: 'ABROAD',
                    name: 'ABROAD'
                }
            ],
            fields: [
                {
                    name: 'value'
                },
                {
                    name: 'name'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/Countries.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.store.Countries', {
    extend : 'Ext.data.Store',

    requires : [ 'Simplereg.model.Country' ],

    constructor : function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([ Ext.apply({
            autoLoad : true,
            model : 'Simplereg.model.Country',
            storeId : 'Countries',
            sorters : {
                property : 'code'
            },
            proxy : {
                type : 'direct',
                api : {
                    read : "personWeb.loadCountries"
                },
                reader : {
                    type : 'json',
                    root : 'records'
                }
            }
        }, cfg) ]);
    }
});/**
 * Static application methods
 */
Ext.ns("Simplereg");

Ext.applyIf(Simplereg, {

    /**
     * Person title (name, date...)
     */
    getPersonTitle: function(record, prefix) {
        if (record && record.data) {
            var text = [], value;
            prefix = prefix || "";
            text.push(record.data[prefix + "firstName"] + " " + record.data[prefix + "lastName"]);
            if (value = record.data[prefix + "ssn"]) {
                text.push(value);
            }
            else if (value = record.data[prefix + "dateOfBirth"]) {
                text.push(Ext.util.Format.date(value, "d.m.Y"));
            }
            return text.join(", ");
        }
    },

    /**
     * Contact title (address, country...)
     */
    getContactTitle: function(record) {
        if (record && record.data) {
            var text = [];
            text.push(record.data.address);
            text.push(record.data.countryCode);
            return text.join(", ");
        }
    }
});

/**
 * Get plain HTML form...
 */
Ext.override(Ext.form.Panel, {
    getPlainForm: function() {
        var values = this.getValues(), name, field,
                form = document.createElement("form");
        for (name in values) {
            field = document.createElement("input");
            field.name = name;
            field.value = values[name];
            form.appendChild(field);
        }
        return form;
    }
});

Ext.define("Simplereg.controller.override.Common", {
    override: "Simplereg.controller.Common",

//TODO: better/right way?
    resetComboboxFilter: function() {
        if (this.is("combobox")) {
            var value = this.getValue();
            this.reset();
            this.setValue(value);
        }
    },

    init: function(application) {

        // Document title
        document.defaultTitle = application.title + " " + application.version;
        document.title = document.defaultTitle;

        this.control({
            "#page": {
                beforerender: function(component, eOpts) {
                    component.init();
                }
            },
            "personselect": {
                beforerender: function(component, eOpts) {
                    component.init();
                }
            },
            "persondetail": {
                beforerender: function(component, eOpts) {
                    //component.init();
                },
                afterrender: function(component, eOpts) {
                    component.reload();
                },
                removed: function(component, ownerCmp, eOpts) {
                    var manager = Ext.data.StoreManager;
                    manager.unregister(component.id);
                    manager.unregister(component.id + "Relatives");
                    manager.unregister(component.id + "Contacts");
                }
            },
            "#date": {
//TODO: mixin formating date display field
                beforerender: function(component, eOpts) {
                    component.renderer = function(value) {
                        return Ext.util.Format.date(value, "d.m.Y");
                    };
                }
            },
            "combobox": {
                blur: function(component, e, eOpts) {
                    this.resetComboboxFilter.call(component);
                }
            },
            "#pages": {
                beforetabchange: function(tabPanel, newCard, oldCard, eOpts) {
                    if (newCard.is("persondetail")) {
                        document.title = newCard.title;
                    }
                    else {
                        document.title = document.defaultTitle;
                    }
                }
            },
            "tool#reload": {
                click: function(tool, e, eOpts) {
                    var panel = tool.up("panel");
                    if (panel.reload) {
                        panel.reload();
                    }
                    return false;
                }
            },
            "#reload": {
                click: function(button, e, eOpts) {
                    Ext.getCmp("page").reload();
                }
            },
            "#dialog": {
                beforehide: function(component, eOpts) {
                    var form = component.down("form");
                    if (form) {
                        form = form.getForm();
                        form.clearInvalid();
                        form.getFields().each(this.resetComboboxFilter);
                    }
                },
                show: function(component, eOpts) {
                    Ext.getCmp("page").windows.push(component);
                },
                hide: function(component, eOpts) {
                    Ext.getCmp("page").windows.pop();
                }
            },
            "#reset": {
                click: function(button, e, eOpts) {
                    button.up("form").getForm().reset();
                }
            },
            "#cancel": {
                click: function(button, e, eOpts) {
                    button.up("window").close();
                }
            },
            "#submit": {
                click: function(button, e, eOpts) {
                    button.up("window").submit(); //submit dialog window
                }
            },
            "#close": {
                click: function(button, e, eOpts) {
                    Ext.getCmp("page").closeActive();
                }
            },
            "#close-all": {
                click: function(button, e, eOpts) {
                    Ext.getCmp("page").closeAll(true);
                }
            },
            "#close-other": {
                click: function(button, e, eOpts) {
                    Ext.getCmp("page").closeAll(false);
                }
            },
            "#search-person": {
                click: function(button, e, eOpts) {
                    Ext.getCmp("person-search").show();
                }
            },
            "#search-all-people": {
                click: function(button, e, eOpts) {
                    Ext.getCmp("person-select").search();
                }
            },
            "#people": {
                itemdblclick: function(dataview, record, item, index, e, eOpts) {
                    var page = Ext.getCmp("page");
                    page.openPersonDetail(record.data.id, record);
                }
            },
            "#people #open": {
                click: function(button, e, eOpts) {
                    var record = button.up("#people").getSelectionModel().getSelection()[0];
                    if (record) {
                        var page = Ext.getCmp("page");
                        page.openPersonDetail(record.data.id, record);
                    }
                }
            },
            "#create-person": {
                click: function(button, e, eOpts) {
                    Ext.getCmp("person-create").show();
                }
            },
            "#update-person": {
                click: function(button, e, eOpts) {
                    return this.managePerson("person-update", button, e, eOpts);
                }
            },
            "#delete-person": {
                click: function(button, e, eOpts) {
                    return this.managePerson("person-delete", button, e, eOpts);
                }
            },
            "#relatives": {
                itemdblclick: function(dataview, record, item, index, e, eOpts) {
                    var page = Ext.getCmp("page");
                    page.openPersonDetail(record.data["relPerson.id"]);
                }
            },
            "#relatives #open": {
                click: function(button, e, eOpts) {
                    var record = button.up("#relatives").getSelectionModel().getSelection()[0];
                    if (record) {
                        var page = Ext.getCmp("page");
                        page.openPersonDetail(record.data["relPerson.id"]);
                    }
                }
            },
            "#create-relative": {
                click: function(button, e, eOpts) {
                    var dialog = Ext.getCmp("relative-create"),
                            person = button.up("persondetail").record,
                            record = Ext.create("Simplereg.model.PersonIdentity", {
                                personId: person.data.id,
                                version: person.data.version
                            });
                    dialog.down("form").loadRecord(record);
                    dialog.show();
                }
            },
            "#relatives #update-relative": {
                click: function(button, e, eOpts) {
                    return this.manageRelative("relative-update", button, e, eOpts);
                }
            },
            "#relatives #delete-relative": {
                click: function(button, e, eOpts) {
                    return this.manageRelative("relative-delete", button, e, eOpts);
                }
            },
            "#contacts": {
                itemdblclick: function(dataview, record, item, index, e, eOpts) {
                    var dialog = Ext.getCmp("contact-update"),
                            form = dialog.down("form");
                    form.loadRecord(record);
                    dialog.show();
                }
            },
            "#create-contact": {
                click: function(button, e, eOpts) {
                    var dialog = Ext.getCmp("contact-create"),
                            person = button.up("persondetail").record,
                            record = Ext.create("Simplereg.model.PersonIdentity", {
                                personId: person.data.id
                            });
                    dialog.down("form").loadRecord(record);
                    dialog.show();
                }
            },
            "#contacts #update-contact": {
                click: function(button, e, eOpts) {
                    return this.manageContact("contact-update", button, e, eOpts);
                }
            },
            "#contacts #delete-contact": {
                click: function(button, e, eOpts) {
                    return this.manageContact("contact-delete", button, e, eOpts);
                }
            }
        });
    },

    /**
     * Update/delete person
     */
    managePerson: function(d, button, e, eOpts) {
        var dialog = Ext.getCmp(d),
                record = button.up("persondetail").record,
                form = dialog.down("form");
        form.loadRecord(record);
        dialog.show();
    },

    /**
     * Update/delete relative
     */
    manageRelative: function(d, button, e, eOpts) {
        var record = button.up("#relatives").getSelectionModel().getSelection()[0];
        if (record) {
            var dialog = Ext.getCmp(d),
                    person = button.up("persondetail").record,
                    form = dialog.down("form");

            // Use master person version
            record = record.copy();
            record.set("version", person.data.version);
            record.commit();

            form.loadRecord(record);
            dialog.show();
        }
    },

    /**
     * Update/delete contact
     */
    manageContact: function(d, button, e, eOpts) {
        var record = button.up("#contacts").getSelectionModel().getSelection()[0];
        if (record) {
            var dialog = Ext.getCmp(d),
                    form = dialog.down("form");
            form.loadRecord(record);
            dialog.show();
        }
    }
});
/*
 * File: app/controller/Common.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.controller.Common', {
    extend: 'Ext.app.Controller',

    requires: [
        'Simplereg.controller.override.Common'
    ]
});
Ext.define("Simplereg.view.override.PersonSearch", {
    override: "Simplereg.view.PersonSearch",

    /**
     * Handle dialog submit
     * (search person)
     */
    submit: function() {
        var me = this, form = me.down("form");

        if (!form.isValid()) {
            return false;
        }

        //dialog.loadMask...
        me.close();

        var params = form.getValues(),
                window = Ext.getCmp("page").getWindow();

        // Search new relative
        if (window == Ext.getCmp("relative-create")) {
            window.search(params);
        }

        // Person select search
        else {
            Ext.getCmp("person-select").search(params);
        }
    }
});
/*
 * File: app/view/PersonSearch.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.PersonSearch', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.PersonSearch'
    ],

    id: 'person-search',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-search',
    title: 'Find Person',
    defaultFocus: 'firstName',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-search',
                                    text: 'Find Person'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'First Name',
                            name: 'firstName'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Last Name',
                            name: 'lastName'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            fieldLabel: 'Date of Birth',
                            items: [
                                {
                                    xtype: 'datefield',
                                    flex: 1,
                                    fieldLabel: 'From',
                                    hideLabel: true,
                                    name: 'dateOfBirthFrom',
                                    altFormats: 'd.m.Y',
                                    format: 'd.m.Y'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5',
                                    hideLabel: true,
                                    value: [
                                        '&ndash;'
                                    ]
                                },
                                {
                                    xtype: 'datefield',
                                    flex: 1,
                                    fieldLabel: 'To',
                                    hideLabel: true,
                                    name: 'dateOfBirthTo',
                                    altFormats: 'd.m.Y',
                                    format: 'd.m.Y'
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'SSN',
                            name: 'ssn'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Gender',
                            name: 'gender',
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'Genders',
                            valueField: 'value'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.PersonCreate", {
    override : "Simplereg.view.PersonCreate",

    /**
     * Handle dialog submit (create person)
     */
    submit : function() {
        var me = this, form = me.down("form");

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        // Create new person
        personWeb.createPerson(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                form.getForm().reset();
                me.close();

                // Person select...
                var view = Ext.getCmp("person-select");
                view.reload();

                // Open new person detail
                if (result.id) {
                    var page = Ext.getCmp("page");
                    page.openPersonDetail(result.id);
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/PersonCreate.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.PersonCreate', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.PersonCreate'
    ],

    id: 'person-create',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-add',
    title: 'Add Person',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    standardSubmit: false,
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-add',
                                    text: 'Add Person'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'First Name',
                            name: 'firstName',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Last Name',
                            name: 'lastName',
                            allowBlank: false
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Date of Birth',
                            name: 'dateOfBirth',
                            altFormats: 'd.m.Y',
                            format: 'd.m.Y'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'SSN',
                            name: 'ssn'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Gender',
                            name: 'gender',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'Genders',
                            valueField: 'value'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.PersonUpdate", {
    override : "Simplereg.view.PersonUpdate",

    /**
     * Handle dialog submit (update person)
     */
    submit : function() {
        var me = this, form = me.down("form");

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        // Update person
        personWeb.updatePerson(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                form.getForm().reset();
                me.close();

                // Person select
                var view = Ext.getCmp("person-select");
                view.reload();

                // Person detail
                if (result.id) {
                    var page = Ext.getCmp("page");
                    page.reloadPersonDetail(result.id);
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/PersonUpdate.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.PersonUpdate', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.PersonUpdate'
    ],

    id: 'person-update',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-edit',
    title: 'Modify Person',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-edit',
                                    text: 'Modify Person'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Id',
                            name: 'id',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Version',
                            name: 'version',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'First Name',
                            name: 'firstName',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Last Name',
                            name: 'lastName',
                            allowBlank: false
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Date of Birth',
                            name: 'dateOfBirth',
                            altFormats: 'd.m.Y',
                            format: 'd.m.Y'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'SSN',
                            name: 'ssn'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Gender',
                            name: 'gender',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'Genders',
                            valueField: 'value'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.PersonDelete", {
    override : "Simplereg.view.PersonDelete",

    /**
     * Handle dialog submit (delete person)
     */
    submit : function() {
        var me = this, form = me.down("form");

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        // Delete person
        personWeb.deletePerson(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                me.close();

                // Person select...
                var view = Ext.getCmp("person-select");
                view.reload();

                // Close person detail
                if (result.id) {
                    var page = Ext.getCmp("page");
                    page.closePersonDetail(result.id);
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/PersonDelete.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.PersonDelete', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.PersonDelete'
    ],

    id: 'person-delete',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-delete',
    title: 'Remove Person',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-delete',
                                    text: 'Remove Person'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Id',
                            name: 'id',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Version',
                            name: 'version',
                            readOnly: true
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'First Name',
                            name: 'firstName'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Last Name',
                            name: 'lastName'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            itemId: 'date',
                            fieldLabel: 'Date of Birth',
                            name: 'dateOfBirth'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'SSN',
                            name: 'ssn'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Gender',
                            name: 'gender'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.RelativeCreate", {
    override : "Simplereg.view.RelativeCreate",

    /**
     * Handle dialog submit (create relative)
     */
    submit : function() {
        var me = this, form = me.down("form");

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        var id = form.getForm().findField("personId").getValue();

        // Create relative
        personWeb.createRelative(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                form.getForm().reset();
                me.close();

                // Person select
                var view = Ext.getCmp("person-select");
                view.reload();

                // Person detail
                if (id) {
                    var page = Ext.getCmp("page");
                    page.reloadPersonDetail(id);
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    },

    /**
     * Filter relative combobox
     */
    search : function(params) {
        var me = this, combobox = me.down("#people"), store = combobox.store;

        me.loadMask.show();

        store.proxy.extraParams = params;

        store.load({
            page : 1,
            start : 0,

            callback : function(records, operation, success) {
                me.loadMask.hide();
                if (success) {
                    if (!records.length) {
                        combobox.reset();
                    }
                    combobox.onTriggerClick();
                }
            }
        });
    }
});
/*
 * File: app/view/RelativeCreate.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.RelativeCreate', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.RelativeCreate'
    ],

    id: 'relative-create',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-add',
    title: 'Add Relative',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-add',
                                    text: 'Add Relative'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'personId',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Version',
                            name: 'version',
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Type',
                            name: 'rtype',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            queryParam: 'name',
                            store: 'RelativeTypes',
                            valueField: 'value'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            fieldLabel: 'Relative',
                            items: [
                                {
                                    xtype: 'combobox',
                                    flex: 1,
                                    itemId: 'people',
                                    name: 'relPerson.id',
                                    allowBlank: false,
                                    editable: false,
                                    displayField: 'title',
                                    pageSize: 25,
                                    store: 'QueryPeople',
                                    valueField: 'id'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'search-person',
                                    iconCls: 'icon-search',
                                    text: '',
                                    tooltip: 'Find relative person'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.RelativeUpdate", {
    override : "Simplereg.view.RelativeUpdate",

    /**
     * Handle dialog submit (update relative)
     */
    submit : function() {
        var me = this, form = me.down("form");

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        var id = form.getForm().findField("personId").getValue();

        // Update relative
        personWeb.updateRelative(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                form.getForm().reset();
                me.close();

                // Person select
                var view = Ext.getCmp("person-select");
                view.reload();

                // Person detail
                if (id) {
                    var page = Ext.getCmp("page");
                    page.reloadPersonDetail(id);
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/RelativeUpdate.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.RelativeUpdate', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.RelativeUpdate'
    ],

    id: 'relative-update',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-edit',
    title: 'Modify Relative',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-edit',
                                    text: 'Modify Relative'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Id',
                            name: 'id',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'personId',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Version',
                            name: 'version',
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Type',
                            name: 'rtype',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            queryParam: 'name',
                            store: 'RelativeTypes',
                            valueField: 'value'
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Rel. Person Id',
                            name: 'relPerson.id',
                            readOnly: true
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Relative',
                            name: 'relPerson.title'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.RelativeDelete", {
    override : "Simplereg.view.RelativeDelete",

    /**
     * Handle dialog submit (delete relative)
     */
    submit : function() {
        var me = this, form = me.down("form");

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        var id = form.getForm().findField("personId").getValue();

        // Delete relative
        personWeb.deleteRelative(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                me.close();

                // Person select...
                var view = Ext.getCmp("person-select");
                view.reload();

                // Person detail
                if (id) {
                    var page = Ext.getCmp("page");
                    page.reloadPersonDetail(id);
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/RelativeDelete.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.RelativeDelete', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.RelativeDelete'
    ],

    id: 'relative-delete',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-delete',
    title: 'Remove Relative',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-delete',
                                    text: 'Remove Relative'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Id',
                            name: 'id',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'personId',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Version',
                            name: 'version',
                            readOnly: true
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Type',
                            name: 'rtype'
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Rel. Person Id',
                            name: 'relPerson.id',
                            readOnly: true
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Relative',
                            name: 'relPerson.title'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.ContactCreate", {
    override : "Simplereg.view.ContactCreate",

    /**
     * Handle dialog submit (create contact)
     */
    submit : function() {
        var me = this, form = me.down("form"), view = Ext.getCmp("pages").getActiveTab();

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        // Create new contact
        personWeb.createContact(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                form.getForm().reset();
                me.close();

                // Person contacts
                if (result.personId) {
                    view = Ext.getCmp("page").findPersonDetail(result.personId);
                    if (view) {
                        view.down("#contacts").reload();
                    }
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/ContactCreate.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.ContactCreate', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.ContactCreate'
    ],

    id: 'contact-create',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-add',
    title: 'Add Contact',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-add',
                                    text: 'Add Contact'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'personId',
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Type',
                            name: 'ctype',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            queryParam: 'name',
                            store: 'ContactTypes',
                            valueField: 'value'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            itemId: 'country',
                            fieldLabel: 'Country',
                            name: 'countryCode',
                            allowBlank: false,
                            displayField: 'title',
                            forceSelection: true,
                            queryMode: 'local',
                            queryParam: 'name',
                            store: 'Countries',
                            valueField: 'code'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Address',
                            name: 'address',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Phone',
                            name: 'phoneNumber'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.ContactUpdate", {
    override : "Simplereg.view.ContactUpdate",

    /**
     * Handle dialog submit (update contact)
     */
    submit : function() {
        var me = this, form = me.down("form"), view = Ext.getCmp("pages").getActiveTab();

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        // Create new contact
        personWeb.updateContact(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                form.getForm().reset();
                me.close();

                // Person contacts
                if (result.personId) {
                    view = Ext.getCmp("page").findPersonDetail(result.personId);
                    if (view) {
                        view.down("#contacts").reload();
                    }
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/ContactUpdate.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.ContactUpdate', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.ContactUpdate'
    ],

    id: 'contact-update',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-edit',
    title: 'Modify Contact',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-edit',
                                    text: 'Modify Contact'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'id',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'version',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'personId',
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Type',
                            name: 'ctype',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            queryParam: 'name',
                            store: 'ContactTypes',
                            valueField: 'value'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            itemId: 'country',
                            fieldLabel: 'Country',
                            name: 'countryCode',
                            allowBlank: false,
                            displayField: 'title',
                            forceSelection: true,
                            queryMode: 'local',
                            queryParam: 'name',
                            store: 'Countries',
                            valueField: 'code'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Address',
                            name: 'address',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Phone',
                            name: 'phoneNumber'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});Ext.define("Simplereg.view.override.ContactDelete", {
    override : "Simplereg.view.ContactDelete",
    // TODO: render country name (code)

    /**
     * Handle dialog submit (delete contact)
     */
    submit : function() {
        var me = this, form = me.down("form"), view = Ext.getCmp("pages").getActiveTab();

        if (!form.isValid()) {
            return false;
        }

        me.loadMask.show();

        // Delete contact
        personWeb.deleteContact(form.getPlainForm(), function(result) {
            me.loadMask.hide();

            if (result.success) {
                me.close();

                // Person contacts
                if (result.personId) {
                    view = Ext.getCmp("page").findPersonDetail(result.personId);
                    if (view) {
                        view.down("#contacts").reload();
                    }
                }
            } else {
                form.getForm().markInvalid(result.errors);
            }
        });
    }
});
/*
 * File: app/view/ContactDelete.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.ContactDelete', {
    extend: 'Ext.window.Window',

    requires: [
        'Simplereg.view.override.ContactDelete'
    ],

    id: 'contact-delete',
    itemId: 'dialog',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-delete',
    title: 'Remove Contact',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    header: false,
                    title: 'Data',
                    trackResetOnLoad: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    iconCls: 'icon-delete',
                                    text: 'Remove Contact'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'id',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'version',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Person Id',
                            name: 'personId',
                            readOnly: true
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Type',
                            name: 'ctype'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Country',
                            name: 'countryCode'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Address',
                            name: 'address'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Phone',
                            name: 'phoneNumber'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    version: '3.1',
    title: 'Simple Reg.',
    models: [
        'Person',
        'PersonIdentity',
        'Relative',
        'Contact',
        'Country'
    ],
    stores: [
        'People',
        'QueryPeople',
        'Genders',
        'Relatives',
        'RelativeTypes',
        'Contacts',
        'ContactTypes',
        'Countries'
    ],
    views: [
        'Page'
    ],
    autoCreateViewport: true,
    controllers: [
        'Common'
    ],
    name: 'Simplereg'
});