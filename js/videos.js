const { createApp, ref } = Vue

const videoFolder = 'foleycrafter/videos'
const videoFiles = [
    'barking_T&S-ControlNet-1',
    'billiards_T&S-ControlNet-1',
    'bowling_T&S-ControlNet-1',
    'cap_gun_shooting_T&S-ControlNet-1',
    'cap_gun_shooting_T&S-ControlNet-2',
    'drum_T&S-ControlNet-1',
    'electric_T&S-ControlNet-1',
    'fire_T&S-ControlNet-1',
    'hammer_T&S-ControlNet-1',
    'hammer_T&S-ControlNet-2',
    'hammer_T&S-ControlNet-3',
    'hammer_T&S-ControlNet-4',
    'hammer_T&S-ControlNet-5',
    'hammer_T&S-ControlNet-6',
    'hammer_T&S-ControlNet-7',
    'hammer_T&S-ControlNet-8',
    'hammer_T&S-ControlNet-9',
    'hammering_T&S-ControlNet',
    'mouse_T&S-ControlNet-1',
    'sharpen_knife_T&S-ControlNet',
    'tennis_T&S-ControlNet-1',
    'tennis_T&S-ControlNet-2',
    'toilet_T&S-ControlNet-1',
];



const videoGroupApp = createApp({
    setup() {
        const message = ref('Hello vue!')

        const videoGroups = [];
        videoFiles.map(item => {
            videoGroups.push([
                {
                    mp4: `${videoFolder}/GroundTruth/${item}.mp4`,
                    title: 'GroundTruth'
                },
               {
                    mp4: `${videoFolder}/DiffFoley/${item}.mp4`,
                    title: 'DiffFoley'
                },
               {
                    mp4: `${videoFolder}/FoleyCrafter/${item}.mp4`,
                    title: 'FoleyCrafter'
                },
               {
                    mp4: `${videoFolder}/Ours/${item}.mp4`,
                    title: 'Ours'
                },
            ])
        });


        return {
            videoGroups,
            // message
        }
    }
});
videoGroupApp.use(window.ElementPlus);
videoGroupApp.mount('#videoLists');