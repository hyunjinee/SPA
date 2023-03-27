function solution(salaries, days) {
  let answer = 0

  for (let [interval, single] of salaries) {
    // console.log(interval, single)

    // 우선 interval이 딱떨어지는 알바생은 그냥 더해주면되겠다.
    if (days % interval === 0) {
      answer += (days / interval) * single
    }

    // 나누어 떨어지지 않는 경우가 문제의 핵심
    else {
      // let workOneDay = false // 하루라도 더 일했는가를 체크할 변수

      // if (namugi) workOneDay = true

      let namugi = days % interval
      answer += Math.floor(days / interval) * single

      if (namugi) answer += single
    }
  }

  return answer
}

// 단기 알바생들에가 각자 다른 방식으로 임금을 지급
// 1. 임금 지급 간격: 공장에서 임금을 지급하는 간격(일수)
// 2. 1회 임금 비용: 한번에 지급받는 임금의 금액

// 2일간격이고 1회 비용이 150달러인 알바생이 지급받는거는 표와같다.

// 나는 이 공장의 관리자로 이 공장을 특정 일수만큼 가동 후 중지한다.
// 노동법을 준수하기 위해서, 마지막으로 임금을 지급받고 (혹은 한번도 임금을 지급받지 않은 상태에서)
// 하루라도 일했던 사람들한테는 공장 가동을 중지할 때 1회 임금 비용만큼의 임금을 더 지급하기로 했다.

// 알바생들의 임금 정보를 나타내는 2차원 배열 salaries와 공장을 가동할 일수 days가 매개변수로 주어짐.
// 모든 알바생들에게 지급할 총 임금을 리턴

// 임금은 [인터벌, 싱글] 임금지급간격과 임금 비용을 뜻한.
