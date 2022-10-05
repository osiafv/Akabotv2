{ pkgs }: {
	deps = [
		pkgs.python39Full
  pkgs.arcan.ffmpeg
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}