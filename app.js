Ext.application({
    name: 'LiipApp',
    views: ['ContactPage'],

    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',
            items: [{
                xtype: 'nestedlist',
                title: 'News',
                iconCls: 'star',
                displayField: 'title',
                store: {
                    type: 'tree',
                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],
                    root: {
                        leaf: false
                    },
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.liip.ch/liip_news_en',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },
                getDetailCard:function (node) {
                    if (node) {
                        return {
                            xtype: 'panel',
                            scrollable: true,
                            styleHtmlContent: true,
                            html: node.get('content')
                        }
                    }
                }
            },
            {
                xtype: 'nestedlist',
                title: 'Blog',
                iconCls: 'star',
                displayField: 'title',
                store: {
                    type: 'tree',
                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],
                    root: {
                        leaf: false
                    },
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.liip.ch/liip_blog',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },
                getDetailCard:function (node) {
                    if (node) {
                        return {
                            xtype: 'panel',
                            scrollable: true,
                            styleHtmlContent: true,
                            html: node.get('content')
                        }
                    }
                }
            },
            {
                xtype: 'nestedlist',
                title: 'Events',
                iconCls: 'star',
                displayField: 'title',
                store: {
                    type: 'tree',
                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],
                    root: {
                        leaf: false
                    },
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.liip.ch/rocketlab_events',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },
                getDetailCard:function (node) {
                    if (node) {
                        return {
                            xtype: 'panel',
                            scrollable: true,
                            styleHtmlContent: true,
                            html: node.get('content')
                        }
                    }
                }
            },
            {
                xtype: 'nestedlist',
                title: 'Jobs',
                iconCls: 'star',
                displayField: 'title',
                store: {
                    type: 'tree',
                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],
                    root: {
                        leaf: false
                    },
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.liip.ch/liip_jobs_en',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },
                getDetailCard:function (node) {
                    if (node) {
                        return {
                            xtype: 'panel',
                            scrollable: true,
                            styleHtmlContent: true,
                            html: node.get('content')
                        }
                    }
                }
            },
            Ext.create('LiipApp.view.ContactPage')
            ]
        });
    }
});
