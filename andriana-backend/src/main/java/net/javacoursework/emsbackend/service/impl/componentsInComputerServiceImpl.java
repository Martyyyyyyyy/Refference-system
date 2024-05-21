package net.javacoursework.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import net.javacoursework.emsbackend.dto.componentsInComputerDto;
import net.javacoursework.emsbackend.exception.ResourceNotFoundException;
import net.javacoursework.emsbackend.repository.componentsInComputerRepository;
import net.javacoursework.emsbackend.service.componentsInComputerService;
import net.javacoursework.emsbackend.mapper.componentsInComputerMapper;
import org.springframework.stereotype.Service;
import net.javacoursework.emsbackend.entity.componentsInComputer;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class componentsInComputerServiceImpl implements componentsInComputerService {

    private componentsInComputerRepository computersRepository;

    @Override
    public componentsInComputerDto createComputer(componentsInComputerDto computersDto) {

        componentsInComputer computer = componentsInComputerMapper.mapTocomponentsInComputer(computersDto);
        componentsInComputer savedComputer = computersRepository.save(computer);
        return componentsInComputerMapper.mapTocomponentsInComputerDto(savedComputer);
    }

    @Override
    public componentsInComputerDto getComputerById(Long computerId) {
        componentsInComputer computer = computersRepository.findById(computerId)
                .orElseThrow(() -> new ResourceNotFoundException("Такого комп'ютера не існує по цьому id: " + computerId));
        return componentsInComputerMapper.mapTocomponentsInComputerDto(computer);
    }

    @Override
    public List<componentsInComputerDto> getAllComputers() {
        List<componentsInComputer> computers = computersRepository.findAll();
        return computers.stream().map(componentsInComputerMapper::mapTocomponentsInComputerDto)
                .collect(Collectors.toList());
    }

    @Override
    public componentsInComputerDto updateComputer(Long computerId, componentsInComputerDto updatedComputer) {
        componentsInComputer computer = computersRepository.findById(computerId).orElseThrow(
                () -> new ResourceNotFoundException("Такого компонента в комп'ютері не існує по цьому id: " + computerId)
        );
        computer.setType(updatedComputer.getType());
        computer.setInventory_number(updatedComputer.getInventory_number());
        computer.setManufacturer(updatedComputer.getManufacturer());
        computer.setSingle(updatedComputer.getSingle());

        componentsInComputer updatedComputerObj = computersRepository.save(computer);
        return componentsInComputerMapper.mapTocomponentsInComputerDto(updatedComputerObj);

    }

    @Override
    public void deleteComputer(Long computerId) {
        componentsInComputer computer = computersRepository.findById(computerId).orElseThrow(
                () -> new ResourceNotFoundException("Такого компонента в комп'ютері не існує по цьому id: " + computerId)
        );

        computersRepository.deleteById(computerId);
    }
}
