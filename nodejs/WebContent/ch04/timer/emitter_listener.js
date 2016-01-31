/**
 * 이벤트 리스너와 이벤트 이미터 구현
 * 아래 코드는 Node.js에서 리스너와 커스텀 이벤트 이미터를 구현하는 방법을 보여준다.
 * Account 객체는 EventEmitter 클래스를 상속받아 balanceChanged 이벤트를
 * 내보내는 두 함수 deposit과 withdraw를 확장한다.
 * 33~63번 줄은 Account 객체 인스턴스의 balanceChanged 이벤트에 추가돼
 * 다양한 형식의 데이터를 보여주는 세 개의 콜백 함수를 구현한 부분이다.
 * 
 * checkGoal(acc, goal) 콜백은 다른 함수들과 다른 형태로 구현돼 있다. 이 방식은 이벤트가
 * 발생될 때 이벤트 리스너 함수에 변수를 전달하는 방법을 보여준다.
 */

var events = require('events');

function Account() {
	
	this.balance = 0;
	events.EventEmitter.call(this);
	this.deposit = function(amount) {
		
		this.balance += amount;
		this.emit('balanceChanged');
		
	};
	
	this.withdraw = function(amount) {
		
		this.balance -= amount;
		this.emit('balanceChanged');
		
	};
	
}

Account.prototype.__proto__ = events.EventEmitter.prototype;

function displayBalance() {
	
	console.log("Account balance: $%d", this.balance);
	
}

function checkOverdraw() {
	
	if (this.balance < 0) {
		
		console.log("Account overdrawn!!!");
		
	}
	
}

function checkGoal(acc, goal) {
	
	if (acc.balance > goal) {
		
		console.log("Goal Achieved!!!");
		
	}
	
	
}

var account = new Account();
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdraw);
account.on("balanceChanged", function() {
	
	checkGoal(this, 1000)
	
});

account.deposit(200);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);