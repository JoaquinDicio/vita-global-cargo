export interface Language {
    seo: {
        title: string;
        description: string;
        keywords: string;
    };

    header: {
        links: {
            href: string;
            label: string;
        }[];
        cta: string;
        mobileCta: string;
        ariaMenu: string;
    };

    hero: {
        eyebrown: string;
        title: {
            white: string;
            red: string;
        };
        description: string;
        button: string;
    };

    heroServices: {
        title: string;
        subtitle: string;
    }[];

    services: {
        eyebrow: string;
        title: string;
        description: string;

        items: {
            title: string;
            description: string;
        }[];
    };

    process: {
        eyebrow: string;
        title: string;
        description: string;

        steps: {
            title: string;
            description: string;
        }[];

        world: {
            title: string;
            description: string;
            button: string;
        };
    };

    experienceBanner: {
        title: string;
        description: string;

        stats: {
            years: {
                value: string;
                label: string;
            };

            network: {
                value: string;
                label: string;
            };

            response: {
                value: string;
                label: string;
            };
        };
    };

    cta: {
        title: string;
        description: string;
        button: string;
    };

    culture: {
        eyebrow: string;
        title: string;
        description: string;
        highlight: string;

        values: {
            title: string;
            description: string;
        }[];
    };

    contact: {
        eyebrow: string;
        title: string;
        description: string;
        highlight: string;

        services: {
            title: string;
            subtitle: string;
        }[];

        form: {
            title: string;
            name: string;
            email: string;
            phone: string;
            message: string;
            button: string;
        };
    };

    footer: {
        description: string;

        navigation: {
            title: string;

            links: {
                href: string;
                label: string;
            }[];
        };

        contact: {
            title: string;
            email: string;
            phone: string;
            location: string;
        };

        copyright: string;
    };
}