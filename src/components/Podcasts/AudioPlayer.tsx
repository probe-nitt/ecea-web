import { useEffect,useRef,useState,FC } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AudioPlayerProps } from "./types";
import { styled } from "@mui/system";
import { Slider, Stack } from "@mui/material";
import {
	MdFastForward,
	MdFastRewind,
	MdPause,
	MdPlayArrow,
} from "react-icons/md";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	borderRadius: 2,
	p: 4,
	width: 320,
};

const PodcastDetails = styled(Stack)(({theme})=>({
	alignSelf:"start",
	gap:0,
	fontFamily:"sans-serif",
	h1:{
		fontWeight: 600,
		fontSize: "1.2rem",
		color:theme.palette.titleColor,
		margin:0
	},
	h5:{
		fontWeight: 600,
		fontSize: "0.8rem",
		color: theme.palette.textColor,
		margin:0
	}
}))

const PodcastImage = styled("img")({
	width: 200,
	height: 200,
	borderRadius: 5,
	marginBottom: 10,
});

const AudioControlButton = styled("button")(({theme})=>({
	width: 40,
	height: 40,
	fontSize: 40,
	color: theme.palette.titleColor,
	background: "none",
	outline: "none",
	border: "none",
  cursor:'pointer'
}));

const AudioPlayer: FC<AudioPlayerProps> = ({
	playerIsOpen,
	setPlayerIsOpen,
	podcasts,
	isPlaying,
	setIsPlaying,
	podcastIndex,
	setPodcastIndex
}) => {
	const {presenterName,image,presenterDescription,audioSrc}=podcasts[podcastIndex]

	// States
	const [progress,setProgress] = useState(0)
	
	// Refs
	const audioRef = useRef(new Audio(audioSrc))
	const intervalRef = useRef<any>();
	const isReady = useRef(false)

	const {duration} = audioRef.current


	//useEffect hooks

	// To pause and play the audio
	useEffect(()=>{
		if(isPlaying){
			audioRef.current.play();
			startTimer();
		}
		else{
			audioRef.current.pause();
			clearInterval(intervalRef.current)
		}
	},[isPlaying])

	// Pause and clean up on unmount
	useEffect(() => {
		return () => {
		  audioRef.current.pause();
		  clearInterval(intervalRef.current);
		}
	  }, []);


	// To handle podcast track changes
	useEffect(()=>{
		// Pause current playing song
		audioRef.current.pause();

		// Change source of the audio
		audioRef.current = new Audio(audioSrc)
		setProgress(audioRef.current.currentTime)

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		  } else {
			// Set the isReady ref as true for the next pass
			isReady.current = true;
		  }
	},[podcastIndex])

	// Functions
	const handleClose = () => {
		setPlayerIsOpen(false);
		setIsPlaying(false);
  	};
	
	const playAudio = () => {
		setIsPlaying(true);
	};

	const pauseAudio = () => {
		setIsPlaying(false);
	};

	const previousAudio = () => {
		setPodcastIndex(prevIndex=>Math.max(0,prevIndex-1))
		audioRef.current.src = podcasts[podcastIndex].audioSrc
		setIsPlaying(true)
	};
	
	const nextAudio = () => {
		setPodcastIndex(prevIndex=>Math.min(podcasts.length-1,prevIndex+1))
		audioRef.current.src = podcasts[podcastIndex].audioSrc
		setIsPlaying(true)
	};

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);
  
		intervalRef.current = setInterval(() => {
		  if (audioRef.current.ended) {
			nextAudio();
		  } else {
			setProgress(audioRef.current.currentTime);
		  }
		}, 1000);
	}

	const onScrub = (e:any) => {
		// Clear any timers already running
	  clearInterval(intervalRef.current);
	  audioRef.current.currentTime = e.target.value;
	  setProgress(audioRef.current.currentTime);
	}
	
	const onScrubEnd = () => {
	  // If not already playing, start
	  if (!isPlaying) {
		setIsPlaying(true);
	  }
	  startTimer();
	}

	return (
		<>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={playerIsOpen}
				onClose={handleClose}
				closeAfterTransition
			>
				<Fade in={playerIsOpen}>
					<Stack sx={style} spacing={2} alignItems="center">
						<PodcastImage
							alt={`Podcast by ${presenterName}`}
							src={image}
						/>
						<PodcastDetails>
							<h1>{presenterName}</h1>
							<h5>{presenterDescription}</h5>
						</PodcastDetails>
						<Slider value={progress} step={1} min={0} max={duration} onChange={onScrub} onMouseUp={onScrubEnd} onKeyUp={onScrubEnd}/>
						<Stack direction="row" gap={3}>
							<AudioControlButton onClick={previousAudio}>
								<MdFastRewind />
							</AudioControlButton>
							{isPlaying ? (
								<AudioControlButton onClick={pauseAudio}>
									<MdPause />
								</AudioControlButton>
							) : (
								<AudioControlButton onClick={playAudio}>
									<MdPlayArrow />
								</AudioControlButton>
							)}

							<AudioControlButton onClick={nextAudio}>
								<MdFastForward />
							</AudioControlButton>
						</Stack>
					</Stack>
				</Fade>
			</Modal>
		</>
	);
};

export default AudioPlayer;
