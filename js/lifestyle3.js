$(document).ready(function () {
    $("#nanogallery2").nanogallery2({
        galleryMosaic : [                       // default layout
          { w: 2, h: 2, c: 1, r: 1 },
          { w: 1, h: 1, c: 3, r: 1 },
          { w: 1, h: 1, c: 3, r: 2 },
          { w: 1, h: 2, c: 4, r: 1 },
          { w: 2, h: 1, c: 5, r: 1 },
          { w: 2, h: 2, c: 5, r: 2 },
          { w: 1, h: 1, c: 4, r: 3 },
          { w: 2, h: 1, c: 2, r: 3 },
          { w: 1, h: 2, c: 1, r: 3 },
          { w: 1, h: 1, c: 2, r: 4 },
          { w: 2, h: 1, c: 3, r: 4 },
          { w: 1, h: 1, c: 5, r: 4 },
          { w: 1, h: 1, c: 6, r: 4 }
        ],
        galleryMosaicXS : [                     // layout for XS width
          { w: 2, h: 2, c: 1, r: 1 },
          { w: 1, h: 1, c: 1, r: 3 },
          { w: 1, h: 1, c: 2, r: 3 },
          { w: 1, h: 2, c: 1, r: 4 },
          { w: 1, h: 1, c: 2, r: 4 },
          { w: 1, h: 1, c: 2, r: 5 },
        ],
        galleryMosaicSM : [                     // layout for SM width
          { w: 2, h: 2, c: 1, r: 1 },
          { w: 1, h: 1, c: 3, r: 1 },
          { w: 1, h: 1, c: 3, r: 2 },
          { w: 1, h: 2, c: 1, r: 3 },
          { w: 2, h: 1, c: 2, r: 3 },
          { w: 1, h: 1, c: 2, r: 4 },
          { w: 1, h: 1, c: 3, r: 4 }
        ],
        galleryMaxRows: 1,
        galleryDisplayMode: 'rows',
        gallerySorting: 'random',
        thumbnailDisplayOrder: 'random',

        thumbnailHeight: '200',
        thumbnailWidth: '240 SM200 XS200',
        thumbnailAlignment: 'scaled',
        thumbnailGutterWidth: 3, thumbnailGutterHeight: 3,
        thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

        thumbnailToolbarImage: null,
        thumbnailToolbarAlbum: null,
        thumbnailLabel: { display: false },

        // DISPLAY ANIMATION
        // for gallery
        galleryDisplayTransitionDuration: 1500,
        // for thumbnails
        thumbnailDisplayTransition: 'imageSlideUp',
        thumbnailDisplayTransitionDuration: 1200,
        thumbnailDisplayTransitionEasing: 'easeInOutQuint',
        thumbnailDisplayInterval: 60,

        // THUMBNAIL HOVER ANIMATION
        thumbnailBuildInit2: 'image_scale_1.15',
        thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
        touchAnimation: true,
        touchAutoOpenDelay: 500,

        // LIGHTBOX
        viewerToolbar: { display: false },
        viewerTools:    {
          topLeft:   'label',
          topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
        },

        // GALLERY THEME
        galleryTheme : { 
          thumbnail: { background: '#111' },
        },
					
        // DEEP LINKING
        locationHash: true,
        items: [{
        src: "images/pic_1.jpg",
        srct: "images/pic_1.jpg",
        title: "pic 1"
        }, {
        src: "images/pic_2.jpg",
        srct: "images/pic_2.jpg",
        title: "pic 2"
        }, {
        src: "images/pic_3.jpg",
        srct: "images/pic_3.jpg",
        title: "pic 3"
        }, {
        src: "images/pic_4.jpg",
        srct: "images/pic_4.jpg",
        title: "pic 4"
        }, {
        src: "images/pic_5.jpg",
        srct: "images/pic_5.jpg",
        title: "pic 5"
        }, {
        src: "images/pic_6.jpg",
        srct: "images/pic_6.jpg",
        title: "pic 6"
        }, {
        src: "images/pic_7.jpg",
        srct: "images/pic_7.jpg",
        title: "pic 7"
        }, {
        src: "images/pic_8.jpg",
        srct: "images/pic_8.jpg",
        title: "pic 8"
        }, {
        src: "images/pic_9.jpg",
        srct: "images/pic_9.jpg",
        title: "pic 9"
        }, {
        src: "images/pic_10.jpg",
        srct: "images/pic_10.jpg",
        title: "pic 10"
        }, {
        src: "images/pic_11.jpg",
        srct: "images/pic_11.jpg",
        title: "pic 11"
        }, {
        src: "images/pic_12.jpg",
        srct: "images/pic_12.jpg",
        title: "pic 12"
        }, {
        src: "images/pic_13.jpg",
        srct: "images/pic_13.jpg",
        title: "pic 13"
        }, {
        src: "images/pic_14.jpg",
        srct: "images/pic_14.jpg",
        title: "pic 14"
        }, {
        src: "images/pic_15.jpg",
        srct: "images/pic_15.jpg",
        title: "pic 15"
        }, {
        src: "images/pic_16.jpg",
        srct: "images/pic_16.jpg",
        title: "pic 16"
        }]
    });
});