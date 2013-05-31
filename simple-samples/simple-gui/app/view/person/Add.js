/*
 * File: app/view/PersonAdd.js
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

Ext.define('SimpleWeb.view.person.Add', {
    extend : 'Ext.window.Window',

    id : 'PersonAdd',
    width : 400,
    closeAction : 'hide',
    iconCls : 'icon-add',
    title : 'Add Person',
    modal : true,
    y : 100,

    initComponent : function() {
        var me = this;

        Ext.applyIf(me, {
            items : [ {
                xtype : 'form',
                bodyPadding : 10,
                header : false,
                title : 'Personal Data',
                defaults : {
                    anchor : '100%'
                },
                api : {
                    // The server-side must mark the submit handler as a
                    // 'formHandler'
                    submit : 'simpleService.validatePersonForm'
                },
                items : [ {
                    xtype : 'textfield',
                    itemId : 'firstName',
                    name : 'firstName',
                    fieldLabel : 'First Name'
                }, {
                    xtype : 'textfield',
                    itemId : 'lastName',
                    name : 'lastName',
                    fieldLabel : 'Last Name'
                }, {
                    xtype : 'datefield',
                    format : 'd.m.Y',
                    itemId : 'dateOfBirth',
                    name : 'dateOfBirth',
                    fieldLabel : 'Date of Birth'
                }, {
                    xtype : 'textfield',
                    itemId : 'ssn',
                    name : 'ssn',
                    fieldLabel : 'SSN'
                }, {
                    xtype : 'combobox',
                    name : 'gender',
                    itemId : 'gender',
                    fieldLabel : 'Gender',
                    editable : false,
                    store : [ 'MALE', 'FEMALE' ]
                } ]
            } ],
            dockedItems : [ {
                xtype : 'toolbar',
                dock : 'bottom',
                items : [ {
                    xtype : 'tbfill'
                }, {
                    xtype : 'button',
                    itemId : 'cancel_dialog',
                    text : 'Cancel'
                }, {
                    xtype : 'button',
                    itemId : 'clear_dialog',
                    text : 'Clear'
                }, {
                    xtype : 'button',
                    itemId : 'accept_add_person',
                    iconCls : 'icon-accept',
                    text : 'Save New Person'
                } ]
            } ]
        });

        me.callParent(arguments);
    }

});