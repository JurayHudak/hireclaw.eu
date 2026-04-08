FROM nginx:alpine
# Copy all site assets (index.html + root level files)
COPY index.html grafana-system-overview.png grafana-tokens-24h.png signal-video.mp4 signal-video-poster.webp sample-video.mp4 sample-video-2.mp4 /usr/share/nginx/html/
# nginx.conf for SPA routing + proper MIME types
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(mp4|webm|webp|png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1
