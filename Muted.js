module.exports = {
    name:'mute',
    description: "this mutes a member",
    async execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member role name');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted role name');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has beed muted`); 
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has beed muted`);

        } else{
            message.channel.send('Cant find that member!');
        }
    }
}