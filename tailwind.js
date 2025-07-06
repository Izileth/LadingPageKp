tailwind.config = {
    theme: {
        extend: {
        fontFamily: {
            sans: ["Inter", "system-ui", "sans-serif"],
            display: ["Playfair Display", "serif"],
        },
        animation: {
            "fade-in": "fadeIn 0.8s ease-out forwards",
            "slide-up": "slideUp 0.6s ease-out forwards",
            float: "float 6s ease-in-out infinite",
            "scale-in": "scaleIn 0.5s ease-out forwards",
            shimmer: "shimmer 2s linear infinite",
            "draw-line": "drawLine 2s ease-out forwards",
        },
        backdropBlur: {
            xs: "2px",
        },
        },
    },
};
