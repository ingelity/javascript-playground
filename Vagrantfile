Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

# with private network vm guest machine is not publicly accessible but only 
# host machine can access it via ethernet lan.
  config.vm.network "private_network", type: "dhcp"

# or make your vm guest machine publicly accessible to anyone through
# public network ip address or though port forwarding. so anyone can access it
# via your host machine's ip address. for public network if more than one 
# network interface is available on the host machine u have to specify bridge
# i.e. network which will be used to establish connection between your
# host machine and vm guest machine.
#  config.vm.network "public_network", bridge: "wlan0"
#  config.vm.network "forwarded_port", guest: 8529, host: 8529  
#  config.vm.network "forwarded_port", guest: 1337, host: 1337  

# using shell provisioner to setup vm guest machine
  config.vm.provision :shell, path: "shell_provisioner.sh"
end
