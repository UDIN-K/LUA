// ==UserScript==
// @name         Agar.io Mod Menu
// @namespace    https://github.com/UDIN-K
// @version      1.0.0
// @description  Mod menu untuk Agar.io - Zoom, Minimap, dan fitur lainnya
// @author       UDIN-K
// @match        *://agar.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

/*
╔═══════════════════════════════════════════════════════════════╗
║                    AGAR.IO MOD MENU v1.0.0                    ║
║                        by UDIN-K                              ║
╠═══════════════════════════════════════════════════════════════╣
║  CARA KERJA MOD BROWSER GAME:                                 ║
║                                                               ║
║  1. Userscript dijalankan oleh Tampermonkey/Greasemonkey      ║
║  2. Script inject ke halaman game                             ║
║  3. Kita bisa akses & modifikasi:                             ║
║     - Canvas (gambar game)                                    ║
║     - WebSocket (koneksi ke server)                           ║
║     - Memory game di browser                                  ║
║     - Input keyboard/mouse                                    ║
║                                                               ║
║  HOTKEYS:                                                     ║
║  [M] - Toggle Menu                                            ║
║  [Z] - Zoom Out                                               ║
║  [X] - Zoom In                                                ║
║  [R] - Reset Zoom                                             ║
║  [G] - Toggle Grid                                            ║
╚═══════════════════════════════════════════════════════════════╝
*/

(function() {
    'use strict';

    // ==================== KONFIGURASI ====================
    // Semua setting mod disimpan di sini
    const config = {
        // Zoom settings
        zoom: {
            enabled: true,
            level: 1.0,        // 1.0 = normal, 0.5 = zoom out 2x
            min: 0.1,          // maksimal zoom out
            max: 2.0,          // maksimal zoom in
            step: 0.1          // increment per pencet tombol
        },
        
        // Visual settings
        visuals: {
            showGrid: true,
            showMinimap: true,
            showFPS: true,
            darkMode: false
        },
        
        // Menu settings
        menu: {
            visible: true,
            x: 10,
            y: 10
        }
    };

    // ==================== VARIABEL GAME ====================
    let canvas = null;          // Canvas game
    let ctx = null;             // Context untuk drawing
    let gameRunning = false;    // Status game
    let fps = 0;                // FPS counter
    let lastFrameTime = 0;      // Untuk hitung FPS
    let frameCount = 0;         // Jumlah frame

    // ==================== HOOK CANVAS ====================
    /*
        KONSEP PENTING: Canvas Hooking
        
        Game browser menggambar ke <canvas> element.
        Kita bisa "hook" (intercept) canvas untuk:
        1. Membaca apa yang digambar (untuk ESP)
        2. Menggambar overlay kita sendiri (menu, dll)
        3. Memodifikasi zoom/skala
    */
    
    function hookCanvas() {
        // Tunggu sampai canvas ada
        const checkCanvas = setInterval(() => {
            canvas = document.querySelector('canvas');
            
            if (canvas) {
                clearInterval(checkCanvas);
                ctx = canvas.getContext('2d');
                console.log('[Mod] Canvas ditemukan!');
                
                // Hook fungsi getContext untuk intercept semua drawing
                hookDrawing();
                
                // Mulai render loop untuk overlay kita
                startRenderLoop();
                
                gameRunning = true;
            }
        }, 100);
    }

    // ==================== HOOK DRAWING ====================
    /*
        KONSEP: Intercept Context2D
        
        Kita bisa override fungsi-fungsi canvas seperti:
        - scale() - untuk zoom
        - drawImage() - untuk melihat apa yang digambar
        - fillRect() - untuk modifikasi tampilan
    */
    
    function hookDrawing() {
        // Simpan fungsi original
        const originalScale = ctx.scale.bind(ctx);
        const originalTransform = ctx.setTransform.bind(ctx);
        
        // Override fungsi scale untuk zoom hack
        ctx.scale = function(x, y) {
            if (config.zoom.enabled) {
                // Modifikasi zoom
                x *= config.zoom.level;
                y *= config.zoom.level;
            }
            return originalScale(x, y);
        };
        
        console.log('[Mod] Drawing hooks aktif!');
    }

    // ==================== RENDER LOOP ====================
    /*
        KONSEP: Game Loop
        
        Setiap game punya loop yang berjalan 60x per detik.
        Kita juga buat loop sendiri untuk:
        1. Menggambar menu
        2. Menggambar ESP/overlay
        3. Update logic mod
    */
    
    function startRenderLoop() {
        function loop(timestamp) {
            // Hitung FPS
            frameCount++;
            if (timestamp - lastFrameTime >= 1000) {
                fps = frameCount;
                frameCount = 0;
                lastFrameTime = timestamp;
            }
            
            // Gambar overlay kita (di atas game)
            drawOverlay();
            
            // Loop terus
            requestAnimationFrame(loop);
        }
        
        requestAnimationFrame(loop);
    }

    // ==================== DRAW OVERLAY ====================
    function drawOverlay() {
        if (!ctx || !canvas) return;
        
        // Save state canvas
        ctx.save();
        
        // Reset transform agar overlay tidak kena zoom
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        // Gambar menu jika visible
        if (config.menu.visible) {
            drawMenu();
        }
        
        // Gambar FPS counter
        if (config.visuals.showFPS) {
            drawFPS();
        }
        
        // Gambar minimap
        if (config.visuals.showMinimap) {
            drawMinimap();
        }
        
        // Restore state canvas
        ctx.restore();
    }

    // ==================== DRAW MENU ====================
    /*
        KONSEP: GUI di Canvas
        
        Untuk membuat menu, kita gambar manual pakai:
        - fillRect() untuk background
        - fillText() untuk teks
        - strokeRect() untuk border
    */
    
    function drawMenu() {
        const x = config.menu.x;
        const y = config.menu.y;
        const width = 220;
        const height = 200;
        
        // Background menu (semi-transparan)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(x, y, width, height);
        
        // Border menu
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        
        // Judul
        ctx.fillStyle = '#00ff00';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('AGAR.IO MOD MENU', x + 30, y + 25);
        
        // Garis pemisah
        ctx.strokeStyle = '#00ff00';
        ctx.beginPath();
        ctx.moveTo(x + 10, y + 35);
        ctx.lineTo(x + width - 10, y + 35);
        ctx.stroke();
        
        // Menu items
        ctx.font = '12px Arial';
        ctx.fillStyle = '#ffffff';
        
        let itemY = y + 55;
        const lineHeight = 22;
        
        // Zoom status
        ctx.fillStyle = config.zoom.enabled ? '#00ff00' : '#ff0000';
        ctx.fillText(`[Z/X] Zoom: ${config.zoom.level.toFixed(1)}x`, x + 15, itemY);
        itemY += lineHeight;
        
        // Grid status
        ctx.fillStyle = config.visuals.showGrid ? '#00ff00' : '#ff0000';
        ctx.fillText(`[G] Grid: ${config.visuals.showGrid ? 'ON' : 'OFF'}`, x + 15, itemY);
        itemY += lineHeight;
        
        // Minimap status
        ctx.fillStyle = config.visuals.showMinimap ? '#00ff00' : '#ff0000';
        ctx.fillText(`Minimap: ${config.visuals.showMinimap ? 'ON' : 'OFF'}`, x + 15, itemY);
        itemY += lineHeight;
        
        // FPS status
        ctx.fillStyle = config.visuals.showFPS ? '#00ff00' : '#ff0000';
        ctx.fillText(`FPS Counter: ${config.visuals.showFPS ? 'ON' : 'OFF'}`, x + 15, itemY);
        itemY += lineHeight;
        
        // Hotkeys info
        itemY += 10;
        ctx.fillStyle = '#888888';
        ctx.font = '10px Arial';
        ctx.fillText('Hotkeys:', x + 15, itemY);
        itemY += 15;
        ctx.fillText('[M] Toggle Menu', x + 15, itemY);
        itemY += 12;
        ctx.fillText('[R] Reset Zoom', x + 15, itemY);
    }

    // ==================== DRAW FPS ====================
    function drawFPS() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(canvas.width - 70, 10, 60, 25);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`FPS: ${fps}`, canvas.width - 65, 28);
    }

    // ==================== DRAW MINIMAP ====================
    function drawMinimap() {
        const size = 150;
        const x = canvas.width - size - 10;
        const y = canvas.height - size - 10;
        
        // Background minimap
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(x, y, size, size);
        
        // Border
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, size, size);
        
        // Grid lines di minimap
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 1; i < 5; i++) {
            // Vertical lines
            ctx.beginPath();
            ctx.moveTo(x + (size/5) * i, y);
            ctx.lineTo(x + (size/5) * i, y + size);
            ctx.stroke();
            
            // Horizontal lines
            ctx.beginPath();
            ctx.moveTo(x, y + (size/5) * i);
            ctx.lineTo(x + size, y + (size/5) * i);
            ctx.stroke();
        }
        
        // Player dot (tengah untuk sekarang)
        ctx.fillStyle = '#00ff00';
        ctx.beginPath();
        ctx.arc(x + size/2, y + size/2, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Label
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px Arial';
        ctx.fillText('MINIMAP', x + 50, y + size - 5);
    }

    // ==================== KEYBOARD INPUT ====================
    /*
        KONSEP: Event Listener
        
        Kita dengarkan keyboard events untuk:
        1. Toggle fitur on/off
        2. Adjust settings (zoom level, dll)
        3. Shortcut commands
    */
    
    function setupKeyboardInput() {
        document.addEventListener('keydown', (e) => {
            // Jangan proses jika sedang typing di input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            switch(e.key.toLowerCase()) {
                case 'm':
                    // Toggle menu visibility
                    config.menu.visible = !config.menu.visible;
                    console.log(`[Mod] Menu: ${config.menu.visible ? 'ON' : 'OFF'}`);
                    break;
                    
                case 'z':
                    // Zoom out
                    config.zoom.level = Math.max(config.zoom.min, config.zoom.level - config.zoom.step);
                    console.log(`[Mod] Zoom: ${config.zoom.level.toFixed(1)}x`);
                    break;
                    
                case 'x':
                    // Zoom in
                    config.zoom.level = Math.min(config.zoom.max, config.zoom.level + config.zoom.step);
                    console.log(`[Mod] Zoom: ${config.zoom.level.toFixed(1)}x`);
                    break;
                    
                case 'r':
                    // Reset zoom
                    config.zoom.level = 1.0;
                    console.log('[Mod] Zoom reset ke 1.0x');
                    break;
                    
                case 'g':
                    // Toggle grid
                    config.visuals.showGrid = !config.visuals.showGrid;
                    console.log(`[Mod] Grid: ${config.visuals.showGrid ? 'ON' : 'OFF'}`);
                    break;
            }
        });
        
        console.log('[Mod] Keyboard input aktif!');
    }

    // ==================== WEBSOCKET HOOK ====================
    /*
        KONSEP ADVANCED: WebSocket Hooking
        
        Game multiplayer menggunakan WebSocket untuk komunikasi dengan server.
        Kita bisa hook WebSocket untuk:
        1. Membaca data yang dikirim/diterima (posisi player, dll)
        2. Memodifikasi data (HATI-HATI: bisa kena ban)
        3. Membuat bot otomatis
        
        INI CONTOH SAJA - tidak diaktifkan karena beresiko
    */
    
    function hookWebSocket() {
        // Simpan WebSocket original
        const OriginalWebSocket = window.WebSocket;
        
        // Override WebSocket
        window.WebSocket = function(url, protocols) {
            console.log('[Mod] WebSocket connecting to:', url);
            
            // Buat WebSocket asli
            const ws = new OriginalWebSocket(url, protocols);
            
            // Hook onmessage untuk membaca data dari server
            const originalOnMessage = ws.onmessage;
            ws.addEventListener('message', (event) => {
                // Di sini kita bisa baca data game
                // event.data berisi data dari server (biasanya binary)
                // console.log('[Mod] Received:', event.data);
            });
            
            // Hook send untuk membaca data yang dikirim ke server
            const originalSend = ws.send.bind(ws);
            ws.send = function(data) {
                // Di sini kita bisa baca/modifikasi data yang dikirim
                // console.log('[Mod] Sending:', data);
                return originalSend(data);
            };
            
            return ws;
        };
        
        // Copy properties dari original
        window.WebSocket.prototype = OriginalWebSocket.prototype;
        window.WebSocket.CONNECTING = OriginalWebSocket.CONNECTING;
        window.WebSocket.OPEN = OriginalWebSocket.OPEN;
        window.WebSocket.CLOSING = OriginalWebSocket.CLOSING;
        window.WebSocket.CLOSED = OriginalWebSocket.CLOSED;
        
        console.log('[Mod] WebSocket hook ready (passive mode)');
    }

    // ==================== INITIALIZATION ====================
    function init() {
        console.log('═══════════════════════════════════════');
        console.log('    AGAR.IO MOD MENU v1.0.0 LOADED     ');
        console.log('           by UDIN-K                   ');
        console.log('═══════════════════════════════════════');
        
        // Setup semua hooks dan listeners
        hookWebSocket();      // Hook WebSocket (passive)
        hookCanvas();         // Hook canvas untuk drawing
        setupKeyboardInput(); // Setup keyboard shortcuts
        
        console.log('[Mod] Initialization complete!');
        console.log('[Mod] Press M to toggle menu');
    }

    // ==================== START ====================
    // Tunggu DOM ready lalu jalankan
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

/*
╔═══════════════════════════════════════════════════════════════╗
║                    RINGKASAN KONSEP                           ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  1. USERSCRIPT                                                ║
║     - File .js yang dijalankan Tampermonkey                   ║
║     - Header // ==UserScript== berisi metadata                ║
║     - @match menentukan di website mana script aktif          ║
║                                                               ║
║  2. CANVAS HOOKING                                            ║
║     - Game browser gambar ke <canvas>                         ║
║     - Kita bisa intercept fungsi canvas                       ║
║     - Untuk zoom, ESP, overlay, dll                           ║
║                                                               ║
║  3. WEBSOCKET HOOKING                                         ║
║     - Game multiplayer pakai WebSocket                        ║
║     - Kita bisa baca data posisi player, dll                  ║
║     - HATI-HATI: modifikasi data bisa kena ban               ║
║                                                               ║
║  4. RENDER LOOP                                               ║
║     - Loop yang berjalan 60x/detik                            ║
║     - Untuk gambar menu dan overlay                           ║
║     - Pakai requestAnimationFrame()                           ║
║                                                               ║
║  5. EVENT LISTENERS                                           ║
║     - Untuk keyboard shortcuts                                ║
║     - Untuk mouse input                                       ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
*/
