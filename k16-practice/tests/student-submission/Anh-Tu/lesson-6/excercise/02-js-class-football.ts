//team1
class Team {
    name: string; 
    players: {
        nameP: string;
        numP: number;
    }[]=[];
    constructor(name: string) {
        this.name = name; 
    };
    addPlayer(player: {nameP: string, numP: string}){
        this.players.push(player);
        console.log(`Cầu thủ tên ${player.nameP} số áo ${player.numP} đã được thêm vào đội`)
    }
    listPlayer(){
        console.log(`Tất cả các cầu thủ của team ${this.name}:`)
        if(this.players.length === 0){
            console.log("WOW team bạn không có cầu thủ nào !")
        }
        else {
            this.players.forEach((player, index ) => {
                console.log(`${index + 1}. ${player.nameP} - ${player.numP} `)
            });
        }
    }
}
let fc = new Team("Manchester United");
fc.addPlayer({nameP: "HO ANH TU",numP: 28});
fc.addPlayer({nameP: "ANH TU HO",numP: 10});

fc.listPlayer();