# Multi-stage build for Max Portfolio
# Serves static Vite build with nginx

FROM nginx:alpine

# Copy built dist files
COPY dist/ /usr/share/nginx/html/

# Copy custom nginx config for SPA routing
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_min_length 1000;

    # SPA routing - fallback to index.html for non-existent files
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2|woff|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://127.0.0.1/ || exit 1
