// 모든 리소스(img, css, js 등) 로드(=onload)되기 전, 돔 컨텐츠가 로드완료된 시점(html attribute 접근 가능)에 실행
window.addEventListener('DOMContentLoaded', () => {
    // selecter 인자값에 해당하는 document id값의 innerText를 text 인자값으로 수정
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    // chrome, node, electron의 버전 정보와 종속성을 인자값 설정하여 replaceText 함수 호출
    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})