module.exports = {
    app: {
        token: 'OTUxNDU1OTE2Nzk0OTk4ODA0.Gf87KV.I_PXKn7qrpAcDGpgQ-qCmicj3X1EbTVbqYbXuU',
        playing: 'by ja ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
