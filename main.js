const { app, BrowserWindow } = require('electron')
const path = require('path');

// 애플리케이션 브라우저 창 선언 및 index.html 파일 로드하여 생성
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // BrowserWindow 옵션에 사전 로드 스크립트 preload.js 정보 전달
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

// app 모듈 준비 완료되면 createWindow() 함수 호출
app.whenReady().then(() => {
    createWindow()
})

// 모든 창이 닫힌 경우 app 종료 (사용자의 OS가 macOS(darwin)인 경우 제외) 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})