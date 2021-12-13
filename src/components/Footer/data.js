import {ReactComponent as Facebook} from 'images/icon-facebook.svg';
import {ReactComponent as Instagram} from 'images/icon-instagram.svg';
import {ReactComponent as Pinterest} from 'images/icon-pinterest.svg';
import {ReactComponent as Twitter} from 'images/icon-twitter.svg';


export const footer = {
    menu: [
        {
            id: 1,
            groupTitle: 'Features',
            links: [
                {
                    text: 'Link Shortening',
                    url: '#',
                },
                {
                    text: 'Branded Links',
                    url: '#',
                },
                {
                    text: 'Analitycs',
                    url: '#',
                },
            ],
        },
        {
            id: 2,
            groupTitle: 'Resources',
            links: [
                {
                    text: 'Blog',
                    url: '#',
                },
                {
                    text: 'Developers',
                    url: '#',
                },
                {
                    text: 'Support',
                    url: '#',
                },
            ],
        },
        {
            id: 3,
            groupTitle: 'Company',
            links: [
                {
                    text: 'About',
                    url: '#',
                },
                {
                    text: 'Our Team',
                    url: '#',
                },
                {
                    text: 'Careers',
                    url: '#',
                },
                {
                    text: 'Conact',
                    url: '#',
                },
            ],
        },
    ],
    socials: [
        {
            id: 1,
            image: Facebook,
            url: '#',
            alt: 'facebook',
        },
        {
            id: 2,
            image: Twitter,
            url: '#',
            alt: 'twitter',
        },
        {
            id: 3,
            image: Pinterest,
            url: '#',
            alt: 'pinterest',
        },
        {
            id: 4,
            image: Instagram,
            url: '#',
            alt: 'instagram',
        },
    ]
};
